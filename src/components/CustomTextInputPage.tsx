import React, { Component } from "react";
import { connect } from "react-redux";
import CustomButton from "./common/CustomButton";
import HeaderAlt from "./common/HeaderAlt";
import Prompt from "./common/Prompt";
import { promptVisible } from "../actions/promptActions";
import {
  setCustomTextInput,
  setResult
} from "../actions/customTextInputActions";
import { modalVisible } from "../actions/modalActions";
import UniversalInput from "./UniversalInput";
import service from "../service/Service";
import { Dispatch } from "redux";
import { History } from "history";
import { AppState } from "../store/appState";

interface Props {
  customTextInput: string;
  numberInput: number | null;
  dispatch: Dispatch<any>;
  history: History;
}

class CustomTextInputPage extends Component<Props> {
  constructor(props: Props) {
    super(props);
    this.sendRequest = this.sendRequest.bind(this);
    this.state = { isConnected: true };
  }

  sendRequest() {
    if (
      this.props.customTextInput != "" &&
      this.props.customTextInput != null &&
      this.props.customTextInput.length <= 23 &&
      this.props.numberInput
    ) {
      this.props.dispatch(modalVisible(true));
      service
        .getText(this.props.numberInput, this.props.customTextInput)
        .then(res => {
          if (res) {
            const responseData = res;
            console.log(responseData);
            this.props.dispatch(modalVisible(false));
            this.props.dispatch(setResult(responseData));
            this.props.history.push("/ResultPage");
          } else {
            const responseData = res;
            this.props.dispatch(modalVisible(false));
            this.props.dispatch(
              promptVisible(
                true,
                responseData +
                  "." +
                  "\n\nRequest_id:\n\n" +
                  responseData.request_id
              )
            );
          }
        })
        .catch(error => {
          this.props.dispatch(modalVisible(false));
          this.props.dispatch(promptVisible(true, error));
        })
        .catch(e => console.log(e));
    } else {
      this.props.dispatch(
        promptVisible(true, "Field cannot be empty or have more than 23 digits")
      );
    }
  }

  render() {
    return (
      <div className="wrapper">
        <HeaderAlt headerText="pg_one" history={this.props.history} />
        <div className="containerStyle">
          <Prompt />
          <p className="textStyle">
            Enter a word with a maximum of 23 characters.
          </p>

          <UniversalInput
            inputType="text"
            maxLength={23}
            onValueChange={text => {
              this.props.dispatch(setCustomTextInput(text));
            }}
            value={this.props.customTextInput}
            onError={text => this.props.dispatch(promptVisible(true, text))}
          />
          <CustomButton onClick={this.sendRequest}>Send</CustomButton>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  customTextInput: state.customTextInputReducer.customTextInput,
  numberInput: state.numberInputReducer.numberInput
});

export default connect(mapStateToProps)(CustomTextInputPage);

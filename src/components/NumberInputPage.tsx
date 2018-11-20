import React, { Component, Dispatch } from "react";
import CustomButton from "./common/CustomButton";
import Header from "./common/Header";
import Prompt from "./common/Prompt";
import { connect } from "react-redux";
import { setNumberInput } from "../actions/numberInputActions";
import { promptVisible } from "../actions/promptActions";
import UniversalInput from "./UniversalInput";
import { History } from "history";
import { AppState } from "../store/appState";

interface Props {
  numberInput: number | null;
  dispatch: Dispatch<any>;
  history: History;
}

class NumberInputPage extends Component<Props> {
  constructor(props: Props) {
    super(props);
    this.handleButtonPress = this.handleButtonPress.bind(this);
  }

  handleButtonPress() {
    if (this.props.numberInput != null) {
      this.props.dispatch(promptVisible(false, ""));
      this.props.history.push("/CustomTextInputPage");
    } else {
      this.props.dispatch(
        promptVisible(true, "Field cannot be empty or null.")
      );
    }
  }

  render() {
    return (
      <div className="wrapper">
        <Header headerText="pg_one" />
        <div className="containerStyle">
          <Prompt />
          <p className="textStyle">Enter a number between 1 and 23</p>

          <UniversalInput
            inputType="number"
            onError={text => this.props.dispatch(promptVisible(true, text))}
            maxLength={23}
            onValueChange={text => {
              this.props.dispatch(setNumberInput(text));
            }}
            value={this.props.numberInput ? String(this.props.numberInput) : ""}
          />
          <CustomButton onClick={this.handleButtonPress}>Next</CustomButton>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  numberInput: state.numberInputReducer.numberInput
});

export default connect(mapStateToProps)(NumberInputPage);

import React, { Component } from "react";
import { connect } from "react-redux";
import CustomButton from "./common/CustomButton";
import { Dispatch } from "redux";
import { History } from "history";
import { AppState } from "../store/appState";

interface Props {
  customTextInput: string;
  numberInput: number;
  dispatch: Dispatch<any>;
  history: History;
  result: string;
  style: StyleSheet;
}

class ResultPage extends Component<Props> {
  constructor(props: Props) {
    super(props);
    this.handleButton = this.handleButton.bind(this);
  }
  handleButton() {
    this.props.history.push("/");
  }

  render() {
    return (
      <div className="containerStyle">
        <div className="viewStyleSuccess">
          <p className="textStyleSuccess">
            Result:
            {"\n\n" + this.props.result}
          </p>
        </div>
        <div className="containerStyle result">
          <CustomButton onClick={() => this.handleButton()}>Home</CustomButton>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  result: state.customTextInputReducer.result
});

export default connect(mapStateToProps)(ResultPage);

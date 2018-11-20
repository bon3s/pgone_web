import React from "react";
import BackButton from "./BackButton";
import { connect } from "react-redux";
import { promptVisible } from "../../actions/promptActions";
import { Dispatch } from "redux";
import { History } from "history";

interface Props {
  headerText: string;
  dispatch: Dispatch<any>;
  history: History;
}

const HeaderAlt = ({ history, headerText, dispatch }: Props) => {
  return (
    <div className="headerViewStyle">
      <BackButton
        onClick={() => {
          history.goBack();
          dispatch(promptVisible(false, ""));
        }}
      />
      <p className="headerTextStyle">{headerText}</p>
    </div>
  );
};

export default connect()(HeaderAlt);

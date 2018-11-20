import React, { Component } from "react";
import { connect } from "react-redux";
import { Icon } from "react-icons-kit";
import { ic_close } from "react-icons-kit/md/ic_close";
import { promptVisible } from "../../actions/promptActions";
import { Dispatch } from "redux";
import { AppState } from "../../store/appState";

interface Props {
  visible: boolean;
  dispatch: Dispatch<any>;
  msg: string;
}

class Prompt extends Component<Props> {
  render() {
    if (this.props.visible) {
      return (
        <div className="prompt viewStyleFail">
          <div
            className="closeButton"
            onClick={() => {
              this.props.dispatch(promptVisible(false, ""));
            }}
          >
            <Icon icon={ic_close} size={15} style={{ color: "#aaaaaa" }} />
          </div>
          <p className="textStyleFail">{String(this.props.msg)}</p>
        </div>
      );
    }
    return <div />;
  }
}

const mapStateToProps = (state: AppState) => ({
  visible: state.promptReducer.visible,
  msg: state.promptReducer.msg
});

export default connect(mapStateToProps)(Prompt);

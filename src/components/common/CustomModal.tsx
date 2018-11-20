import React, { Component } from "react";
import { connect } from "react-redux";
import { AppState } from "../../store/appState";

interface State {
  visible: boolean;
}

class CustomModal extends Component<State> {
  render() {
    if (this.props.visible) {
      return (
        <div>
          <div className="overlay">
            <div className="modal">
              <div className="loader" />
            </div>
          </div>
          {this.props.children}
        </div>
      );
    } else {
      return <div>{this.props.children}</div>;
    }
  }
}

const mapStateToProps = (state: AppState) => ({
  visible: state.modalReducer.visible
});

export default connect(mapStateToProps)(CustomModal);

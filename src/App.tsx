import React, { Component } from "react";
import { Provider } from "react-redux";
import { store } from "./store/store";
import Router from "./router";
import CustomModal from "./components/common/CustomModal";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div style={{ flex: 1 }}>
          <CustomModal>
            <Router />
          </CustomModal>
        </div>
      </Provider>
    );
  }
}

export default App;

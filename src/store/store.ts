import { createStore } from "redux";
import rootReducer from "../reducers";
import { AppState } from "./appState";

const initialState: AppState = {
  numberInputReducer: {
    numberInput: null
  },
  promptReducer: {
    visible: false,
    msg: ""
  },
  customTextInputReducer: {
    customTextInput: "",
    result: ""
  },
  modalReducer: {
    visible: false
  }
};

export const store = createStore(rootReducer, initialState);

import { State as numberInputState } from "../reducers/numberInputReducer";
import { State as promptState } from "../reducers/promptReducer";
import { State as customTextInputState } from "../reducers/customTextInputReducer";
import { State as modalState } from "../reducers/modalReducer";

export interface AppState {
  readonly numberInputReducer: numberInputState;
  readonly promptReducer: promptState;
  readonly customTextInputReducer: customTextInputState;
  readonly modalReducer: modalState;
}

import { combineReducers } from "redux";
import ScoreReducer from "./ScoreReducer";

const rootReducer = combineReducers({
  scoreReducer: ScoreReducer,
});

export default rootReducer;

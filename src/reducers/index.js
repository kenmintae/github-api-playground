import { combineReducers } from "redux";
import commitsReducer from "./commits";
import reposReducer from "./repos";
import orgInfoReducer from "./orgInfo";

const rootReducer = combineReducers({
  reposReducer,
  commitsReducer,
  orgInfoReducer
});

export default rootReducer;

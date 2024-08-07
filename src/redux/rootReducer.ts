import { combineReducers } from "redux";
import app from "./app/appSlice";

const rootReducer = combineReducers({
  app: app,
});

export default rootReducer;

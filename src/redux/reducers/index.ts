import { combineReducers } from "redux";
import globalReducer from "./global";
import authReducer from "./auth";
import userReducer from "./user";

const rootReducer = combineReducers({
  global: globalReducer,
  auth: authReducer,
  user : userReducer,
});

export default rootReducer;

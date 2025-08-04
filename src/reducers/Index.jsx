import { combineReducers } from "redux";
import userReducer from "./userReducer"; 

const rootReducer = combineReducers({
  userState: userReducer // ✅ Use your actual reducer here
});

export default rootReducer;

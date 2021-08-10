import { combineReducers } from "redux";
import { authReducer, forgotReducer, resetReducer } from "./auth.reducer";
import { userReducer } from "./user.reducer";

const reducers = combineReducers({
  auth: authReducer,
  forgot: forgotReducer,
  reset: resetReducer,
  user: userReducer,
});

export default reducers;

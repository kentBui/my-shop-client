import produce from "immer";
import { userTypes } from "../types";

const authIniState = {
  loading: false,
  success: null,
  error: null,
};
export const authReducer = (state = authIniState, action) => {
  switch (action.type) {
    case userTypes.REGISTER_USER:
      return { ...state, loading: true };

    case userTypes.REGISTER_USER_SUCCESS:
      return { ...state, loading: false, success: action.payload };

    case userTypes.REGISTER_USER_FAIL:
      return { ...state, loading: fasle, success: null, error: action.payload };

    case userTypes.CLEAR_ERROR:
      return { ...state, loading: false, error: null };

    default:
      return state;
  }
};

const forgotPasswordIniState = {
  loading: false,
  message: "",
  error: null,
};
export const forgotReducer = (state = forgotPasswordIniState, action) => {
  switch (action.type) {
    case userTypes.FORGOT_PASSWORD:
      return { ...state, loading: true };

    case userTypes.FORGOT_PASSWORD_SUCCESS:
      return { ...state, loading: false, message: action.payload };

    case userTypes.FORGOT_PASSWORD_FAIL:
      return { ...state, loading: false, message: "", error: action.payload };

    case userTypes.CLEAR_ERROR:
      return { ...state, loading: false, error: null };

    default:
      return state;
  }
};
const resetPasswordIniState = {
  loading: false,
  message: "",
  error: null,
};
export const resetReducer = (state = resetPasswordIniState, action) => {
  switch (action.type) {
    case userTypes.RESET_PASSWORD:
      return { ...state, loading: true };

    case userTypes.RESET_PASSWORD_SUCCESS:
      return { ...state, loading: false, message: action.payload };

    case userTypes.RESET_PASSWORD_FAIL:
      return { ...state, loading: false, message: "", error: action.payload };

    case userTypes.CLEAR_ERROR:
      return { ...state, error: null };

    default:
      return state;
  }
};

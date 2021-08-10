import produce from "immer";
import { userTypes } from "../types";

const userIniState = {
  loading: false,
  user: null,
  error: null,
};
export const userReducer = (state = userIniState, action) => {
  switch (action.type) {
    case userTypes.LOAD_USER:
      return { ...state, loading: true };

    case userTypes.LOAD_USER_SUCCESS:
      return { ...state, loading: false, user: action.payload };

    case userTypes.LOAD_USER_FAIL:
      return { ...state, loading: false, user: null, error: action.payload };

    case userTypes.CLEAR_ERROR:
      return { ...state, loading: false, error: null };

    default:
      return state;
  }
};

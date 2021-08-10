import axios from "axios";
import { userTypes } from "../types";
const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

// register
export const registerUserAction = (user) => async (dispatch) => {
  try {
    dispatch({
      type: userTypes.REGISTER_USER,
    });

    const { data } = await axios.post("/api/auth/register", user, config);

    dispatch({
      type: userTypes.REGISTER_USER_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: userTypes.REGISTER_USER_FAIL,
      payload: error.response.data.message,
    });
  }
};

// clear error
export const clearAuthError = () => (dispatch) => {
  dispatch({
    type: userTypes.CLEAR_ERROR,
  });
};

export const getProfileActions = () => async (dispatch) => {
  try {
    dispatch({
      type: userTypes.LOAD_USER,
    });

    const { data } = await axios.get("/api/me");

    dispatch({
      type: userTypes.LOAD_USER_SUCCESS,
      payload: data.user,
    });
  } catch (error) {
    dispatch({
      type: userTypes.LOAD_USER_FAIL,
      payload: error.response.data.message,
    });
  }
};

// forgot password
export const forgotPasswordAction = (email) => async (dispatch) => {
  try {
    dispatch({
      type: userTypes.FORGOT_PASSWORD,
    });

    const { data } = await axios.post("/api/password/forgot", email, config);
    dispatch({
      type: userTypes.FORGOT_PASSWORD_SUCCESS,
      payload: data.message,
    });
  } catch (error) {
    console.log(error.response.data.message);
    dispatch({
      type: userTypes.FORGOT_PASSWORD_FAIL,
      payload: error.response.data.message,
    });
  }
};

// reset password
export const resetPasswordAction =
  (dataPassword, token) => async (dispatch) => {
    try {
      dispatch({
        type: userTypes.RESET_PASSWORD,
      });

      const { data } = await axios.post(
        `/api/password/reset/${token}`,
        dataPassword,
        config
      );
      dispatch({
        type: userTypes.RESET_PASSWORD_SUCCESS,
        payload: data.message,
      });
    } catch (error) {
      console.log(error.response.data.message);
      dispatch({
        type: userTypes.RESET_PASSWORD_FAIL,
        payload: error.response.data.message,
      });
    }
  };

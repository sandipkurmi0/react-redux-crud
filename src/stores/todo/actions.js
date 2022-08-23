import {
    LOGIN_LOADING,
  } from "./constants";

export function loginSetLoading(loading) {
    return {
      type: LOGIN_LOADING,
      payload: loading,
    };
}

export const counterPluse = (value) => (dispatch) => {
    return new Promise((resolve, reject) => {
        dispatch(loginSetLoading(value));
        resolve(true);
    })
}
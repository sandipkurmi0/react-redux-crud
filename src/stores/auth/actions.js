import { LOGIN_REMOVE_TOKEN, LOGIN_SUCCESS } from "./constants";
import { __login, __signUp } from "./services";

export function setLoginToken(params) {
  return {
    type: LOGIN_SUCCESS,
    payload: params,
  };
}

export function userLogout() {
  return {
    type: LOGIN_REMOVE_TOKEN,
  };
}

export const signUp = (formData) => (dispatch) => {
  console.log(formData);
  return new Promise((resolve, reject) => {
    __signUp(formData)
      .then((response) => {
        resolve(response);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const login = (formData) => (dispatch) => {
  console.log(formData);
  return new Promise((resolve, reject) => {
    __login(formData)
      .then((response) => {
        console.log(response);
        dispatch(setLoginToken(response));
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const logout = () => (dispatch) => {
  dispatch(userLogout());
};

// export const logout = () => (dispatch) => {
//   return new Promise((resolve, reject) => {
//     dispatch(userLogout());
//   });
// };

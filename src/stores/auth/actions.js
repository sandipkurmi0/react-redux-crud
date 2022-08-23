import { LOGIN_REMOVE_TOKEN, LOGIN_SUCCESS, LOGIN_LOADING } from "./constants";
import { __login } from "./services"

export function setLoginToken(params){
    return {
        type: LOGIN_SUCCESS,
        payload: params,
      };
}

export function loginSetLoading(loading) {
    return {
      type: LOGIN_LOADING,
      payload: loading,
    };
  }

export function userLogout(){
    return {
        type: LOGIN_REMOVE_TOKEN,
      };
}



export const login = (formData) => (dispatch) => {
    return new Promise((resolve, reject) => {
        dispatch(loginSetLoading(true));
        __login(formData).then(async (response) => {
            dispatch(setLoginToken(response))
        }).catch((err) => {
			reject(err)
		}).finally(() => {
			dispatch(loginSetLoading(false));
		})
    })
}

export const logout = () => (dispatch) => {
    return new Promise((resolve, reject) => {
        dispatch(userLogout());
    });
}


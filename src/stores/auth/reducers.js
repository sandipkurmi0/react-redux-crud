import { LOGIN_SUCCESS, LOGIN_REMOVE_TOKEN, LOGIN_LOADING } from "./constants";

const initialState = {
  token: null,
  user: {},
  loading: false,
};

export function authReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      // console.log(action)
      return {
        ...state,
        token: action.payload.token,
        user: action.payload.data,
      };
    case LOGIN_REMOVE_TOKEN:
      return {
        ...state,
        token: null,
        user: {},
      };
    case LOGIN_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    //break;
    default:
      return state;
  }
}

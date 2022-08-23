import {
    LOGIN_LOADING,
  } from "./constants";

const initialState = {
    counter: 0,
};

export function todoReducer(
    state = initialState,
    action
){
    switch (action.type) {
        case LOGIN_LOADING:
            return {
                ...state,
                counter: action.payload
            };
        default:
            return state;
    }
}
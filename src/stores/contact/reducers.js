import { SET_CONTACT } from "./constants";

const initialState = { contacts: [] };

export function contactReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CONTACT:
      return {
        ...state,
        contacts: action.payload.data,
      };
    default:
      return state;
  }
}

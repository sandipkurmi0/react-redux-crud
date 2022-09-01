import { SET_GROUP } from "./constants";

const initialState = { groups: [] };

export function groupReducer(state = initialState, action) {
  switch (action.type) {
    case SET_GROUP:
      return {
        ...state,
        groups: action.payload.data,
      };
    default:
      return state;
  }
}

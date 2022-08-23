import { SET_BLOG } from "./constants";

const initialState = { blogs: [] };

export function blogReducer(state = initialState, action) {
  switch (action.type) {
    case SET_BLOG:
      return {
        ...state,
        blogs: action.payload.data,
      };
    default:
      return state;
  }
}

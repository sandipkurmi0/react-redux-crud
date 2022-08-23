import { SET_CATEGORY } from "./constants";

const initialState = {
  categories: [],
};

export function categoryReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CATEGORY:
      return {
        ...state,
        categories: action.payload.data,
      };
    default:
      return state;
  }
}

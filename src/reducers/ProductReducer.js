import { types } from "../types/types";

const initialState = {
  product: [],
};

export const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.productLoad:
      return {
        ...state,
        product: action.payload,
      };
    default:
      return state;
  }
};

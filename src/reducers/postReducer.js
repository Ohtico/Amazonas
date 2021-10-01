import { types, typesArticulo } from "../types/types";

const initialState = {
  product: [],
};

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case typesArticulo.register:
      return {
        product: [action.payload]
      };
    default:
      return state;
  }
};

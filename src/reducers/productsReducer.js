import { types } from "../types/types";

const initialState = {
  productos: [],
};
export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.productosLoadLast10:
      return {
        ...state,
        productos: [...action.payload],
      };
    case types.productosLoadItem: {
      return {
        ...state,
        item: action.payload,
      };
    }
    default:
      return state;
  }
};

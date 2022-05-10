import { Reducer } from "redux";
import { State, Actions, ActionType } from "./types";

const initialState: State = {
  products: [],
  product: {},
  selectedProductID: 0,
  selectedProduct: null,
};

export const rootReducer: Reducer<State, Actions> = (
  state: State = initialState, action,
): State => {
  switch (action.type) {
    case ActionType.GetProduct:
      return {
        ...state,
        products: [...state.products, ...action.payload],
      };
    case ActionType.RemoveProduct:
      return {
        ...state,
        products: state.products.filter(product => product.id !== action.payload),
      };
    case ActionType.AddProduct:
      return {
        ...state,
        products: [...state.products, action.payload],
      }

    default:
      return state;
  }
};
import { createStore, Reducer, Store } from 'redux';
import { Actions, ActionType, State } from './types';

const initialState: State = {
  product: [],
};

const reducer: Reducer<State, Actions> = (
  state: State = initialState, action,
): State => {
  switch (action.type) {
    case ActionType.AddProduct:
      return {
        ...state,
        product: [...state.product, ...action.payload],
      };
    default:
      return state;
  }
};

export const store: Store<State, Actions> = createStore(reducer);
import { createStore, Reducer, Store, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
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

export const store: Store<State, Actions> = createStore(reducer, applyMiddleware(thunk))
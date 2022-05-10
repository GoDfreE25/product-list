import { createStore, Store, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './reducer';
import { Actions, State } from './types';

export const store: Store<State, Actions> = createStore(rootReducer, applyMiddleware(thunk))
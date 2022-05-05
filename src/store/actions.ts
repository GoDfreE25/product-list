import { Product } from '../types';
import {
  ActionType, AddProductAction,
} from './types';

export const addTodosActionCreator = (payload: Product[]): AddProductAction => ({
  type: ActionType.AddProduct,
  payload,
});
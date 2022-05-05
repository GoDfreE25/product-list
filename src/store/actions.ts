import { Product } from '../types';
import {
  ActionType, AddProductAction,
} from './types';

export const addProductActionCreator = (payload: Product[]): AddProductAction => ({
  type: ActionType.AddProduct,
  payload,
});

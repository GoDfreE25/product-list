import { Dispatch } from 'redux';
import { getProduct } from '../api/product.api';
import { Product } from '../types';
import {
  Actions,
  ActionType, AddProductsAction, GetProductsAction, RemoveProductsAction,
} from './types';

export const getProducts = (payload: Product[]): GetProductsAction => ({
  type: ActionType.GetProduct,
  payload,
});

export const loadProducts = () => async (dispatch: Dispatch<Actions>) => {
  const products = await getProduct();

  const addProductAction = getProducts(products)

  dispatch(addProductAction)
};

export const removeProductById = (payload: number): RemoveProductsAction => ({
  type: ActionType.RemoveProduct,
  payload,
});

export const addProduct = (payload: Product): AddProductsAction => ({
  type: ActionType.AddProduct,
  payload,
});
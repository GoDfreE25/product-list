import { Action as BaseAction } from 'redux';
import { Product } from '../types';

export interface State {
  products: Product[],
  product: Product | {},
}

export interface Action<T, P> extends BaseAction<T> {
  payload: P,
}

export enum ActionType {
  GetProduct = 'getProduct',
  RemoveProduct = 'removeProduct',
  AddProduct= 'addProducr'
}

export type GetProductsAction = Action<ActionType.GetProduct, Product[]>;
export type RemoveProductsAction = Action<ActionType.RemoveProduct, number>;
export type AddProductsAction = Action<ActionType.AddProduct, Product>;


export type Actions = GetProductsAction | RemoveProductsAction | AddProductsAction;
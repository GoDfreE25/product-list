import { Action as BaseAction } from 'redux';
import { Product } from '../types';

export interface State {
  product: Product[],
}

export interface Action<T, P> extends BaseAction<T> {
  payload: P,
}

export enum ActionType {
  AddProduct = 'AddProduct',
}

export type AddProductAction = Action<ActionType.AddProduct, Product[]>;


export type Actions = AddProductAction;
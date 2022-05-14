import { Action as BaseAction } from 'redux';
import { Product } from '../types';

export interface State {
  products: Product[],
  product: Product | {},
  selectedProductID: number,
  selectedProduct: Product | null,
  editProduct: Product | {},
}

export interface Action<T, P> extends BaseAction<T> {
  payload: P,
}

export enum ActionType {
  GetProduct = 'getProduct',
  RemoveProduct = 'removeProduct',
  AddProduct = 'addProducr',
  SelectProductId = 'selectedProductId',
  SelectProduct = 'selectedProduct',
  EditProduct = 'editProduct',
}

export type GetProductsAction = Action<ActionType.GetProduct, Product[]>;
export type RemoveProductsAction = Action<ActionType.RemoveProduct, number>;
export type AddProductsAction = Action<ActionType.AddProduct, Product>;
export type SelectedProductIdAction = Action<ActionType.SelectProductId, number>;
export type SelectedProductAction = Action<ActionType.SelectProduct, Product | null>;
export type EditProductsAction = Action<ActionType.EditProduct, Product>;



export type Actions = 
GetProductsAction 
| RemoveProductsAction 
| AddProductsAction 
| SelectedProductIdAction 
| SelectedProductAction
| EditProductsAction;
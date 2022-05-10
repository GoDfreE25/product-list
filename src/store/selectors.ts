import { Product } from "../types";
import { State } from "./types";

export const loadProductSelector = (state: State): Product[] => state.products;

export const getSelectedProductIdSelector = (state: State): number => state.selectedProductID;

export const getProductSelector = (state: State): Product | null => state.selectedProduct;
import { Product } from "../types";
import { State } from "./types";

export const loadProductSelector = (state: State): Product[] => state.products;
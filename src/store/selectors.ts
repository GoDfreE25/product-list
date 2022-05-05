import { Product } from "../types";
import { State } from "./types";

export const getProductSelector = (state: State): Product[] => state.product;
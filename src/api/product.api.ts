import { Product } from "../types";
import { get } from "./api";
import { ENDPOINTS } from "./api.constans";

export const getProduct = (): Promise<Product[]> => get(ENDPOINTS.product);

export const removeProduct = (productId: number): Promise<number> => get(`${ENDPOINTS.product}/${productId}`, {
  method: 'DELETE',
});

export const addedProduct = (product: Product): Promise<Product> => get(`${ENDPOINTS.product}/`, {
  method: 'POST',
  body: JSON.stringify(product),
});
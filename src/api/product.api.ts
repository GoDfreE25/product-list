import { Product } from "../types";
import { get } from "./api";
import { ENDPOINTS } from "./api.constans";

export const getProduct = (): Promise<Product[]> => get(ENDPOINTS.product);

export const removeProduct = (productId: number): Promise<number> => get(`${ENDPOINTS.product}/${productId}`, {
  method: 'DELETE',
  headers: {
    'Content-Type': 'application/json; charset=UTF-8'
  },
});

export const addedProduct = (product: Product): Promise<Product> => get(`${ENDPOINTS.product}/`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json; charset=UTF-8'
  },
  body: JSON.stringify(product),
});

export const getProductById = (productId: number): Promise<Product> => get(`${ENDPOINTS.product}/${productId}`)
import { Product } from "../types";

const BASE_URL = 'http://localhost:3000';

const request = (url: string, options?:RequestInit) => {
  return fetch(`${BASE_URL}${url}`, options)
    .then(response => response.json());
};

export const getProducts = () : Promise<Product[]> => request('/product/');

export const addProduct = (product: Product) => {
  return request('/product', {
    method: 'POST',
    body: JSON.stringify(product),
  });
};

export const removeProduct = (productId: number) => {
  return request(`/comments/${productId}`, {
    method: 'DELETE',
  });
};
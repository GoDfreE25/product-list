import { Product } from "../types";

const BASE_URL = 'http://localhost:3000';

const request = (url: string) => {
  return fetch(`${BASE_URL}${url}`)
    .then(response => response.json());
};

export const getProducts = () : Promise<Product[]> => request('/product/')
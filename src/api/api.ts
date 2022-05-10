import { BASE_URL } from "./api.constans";

export const get = <T>(endpoint: string, options?:RequestInit): Promise<T> => (
  fetch(`${BASE_URL}${endpoint}`, options)
    .then(response => response.json())
);
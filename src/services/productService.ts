import type { Order, Product } from "../types";

const API_URL = "http://localhost:3000";

export const getProducts = async (): Promise<Product[]> => {
  const response = await fetch(API_URL + "/products");
  if(!response.ok){
    throw new Error("Fallo en la petición: " + response.statusText);
  }
  return await response.json(); // Placeholder
};

export const createOrder = async (order: Order): Promise<void> => {
  const response = await fetch(API_URL + "/orders", {
    method:"POST",
    body: JSON.stringify(order),
    headers: {
      "Content-Type":"application/json"
    }
  });
  if(!response.ok){
    throw new Error("Fallo en la petición: " + response.statusText);
  }
};
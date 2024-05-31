import { BASE_URL } from "./api";

export async function getProduct(productId) {
  const endpoint = `${BASE_URL}/product/${productId}`;
  const response = await fetch(endpoint);
  const data = await response.json();

  return data;
}

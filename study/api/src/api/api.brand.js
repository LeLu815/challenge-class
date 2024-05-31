import { BASE_URL, client } from "./api";

export async function getBrands() {
  const endpoint = "/brands";
  const response = await client.get(endpoint);
  const data = response.data;

  return data;
}
// export async function getBrands() {
//   const endpoint = `${BASE_URL}/brands`;
//   const response = await fetch(endpoint);
//   const data = await response.json();

//   return data;
// }

export async function getBrand(brandId) {
  const endpoint = `${BASE_URL}/brands/${brandId}`;
  const response = await fetch(endpoint);
  const data = await response.json();

  return data;
}

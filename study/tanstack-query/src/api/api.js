import axios from "axios";
import BrandsApi from "./brands.api";
import ProductsAPI from "./products.api";

const BASE_URL = "https://api.ballang.yoojinyoung.com/";

class API {
  #baseUrl = BASE_URL;
  #client;

  brands;
  products;
  constructor() {
    this.#client = axios.create({ baseURL: this.#baseUrl });
    this.brands = new BrandsApi(this.#client);
    this.products = new ProductsAPI(this.#client);
  }
}

const api = new API();

export default api;

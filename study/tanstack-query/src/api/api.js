import axios from "axios";
import BrandsApi from "./brands.api";
import ProductsAPI from "./products.api";

const BASE_URL = "https://api.ballang.yoojinyoung.com/";

// 클래스를 쓰는 이유는 캡슐화를 하기 위함이다..

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

class ProductsAPI {
  #client;
  constructor(client) {
    this.#client = client;
  }
  async getProducts() {
    const response = await this.#client.get("/products");
    const data = response.data;
    const result = data.result;
    return result;
  }
  getProduct() {}
  deleteProduct() {}
  deleteProducts() {}
}

export default ProductsAPI;

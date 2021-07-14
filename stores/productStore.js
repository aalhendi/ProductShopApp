//State & Store
import { makeAutoObservable } from "mobx";
import instance from "./instance";

class ProductStore {
  products = [];
  loading = true;

  constructor() {
    makeAutoObservable(this);
  }

  fetchProducts = async () => {
    try {
      const res = await instance.get("/products");
      this.products = res.data;
      this.loading = false;
    } catch (error) {
      console.error("error in fetchProducts", error);
    }
  };

  getProductById = (productId) => {
    this.products.find((product) => product.id === productId);
  };
}

const productStore = new ProductStore();
productStore.fetchProducts();

export default productStore;

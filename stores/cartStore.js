/* Imports */
import { makeAutoObservable } from "mobx";
import AsyncStorage from "@react-native-async-storage/async-storage";
import instance from "./instance";
import authStore from "./authStore";

class CartStore {
  constructor() {
    makeAutoObservable(this);
  }

  cartItems = [];

  fetchCartItems = async () => {
    try {
      const storedItems = await AsyncStorage.getItem("cart");
      this.cartItems = storedItems ? JSON.parse(storedItems) : [];
    } catch (error) {
      console.error(error);
    }
  };

  addCartItem = async (newItem) => {
    const foundItem = this.cartItems.find(
      (item) => item.productId === newItem.productId
    );
    if (foundItem) {
      foundItem.quantity += newItem.quantity;
    } else {
      this.cartItems.push(newItem);
    }
    try {
      await AsyncStorage.setItem("cart", JSON.stringify(this.cartItems));
    } catch (error) {
      console.error(error);
    }
  };

  deleteCartItem = async (productId) => {
    this.cartItems = this.cartItems.filter(
      (item) => item.productId !== productId
    );
    try {
      await AsyncStorage.setItem("cart", JSON.stringify(this.cartItems));
    } catch (error) {
      console.error(error);
    }
  };

  checkout = async () => {
    try {
      await instance.post("/checkout", this.cartItems);
      this.cartItems = [];
      await AsyncStorage.removeItem("cart");
    } catch (error) {
      console.error(error);
    }
  };

  get totalQuantitiy() {
    let total = 0;
    this.cartItems.forEach((item) => (total += item.quantity));
    return total;
  }
}

const cartStore = new CartStore();
cartStore.fetchCartItems();

export default cartStore;

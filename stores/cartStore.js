/* Imports */
import { makeAutoObservable } from "mobx";

class CartStore {
  cartItems = [
    {
      productId: 1,
      quantity: 3,
    },
    {
      productId: 2,
      quantity: 2,
    },
    {
      productId: 4,
      quantity: 5,
    },
  ];

  constructor() {
    makeAutoObservable(this);
  }
}

const cartStore = new CartStore();

export default cartStore;

/* Imports */
import React from "react";
import { Button, List, Spinner, Text } from "native-base";
/* Components */
import CartItem from "./CartItem";
/* State and Store */
import cartStore from "../../stores/cartStore";
import productStore from "../../stores/productStore";
import { observer } from "mobx-react-lite";

const CartList = () => {
  if (productStore.loading) {
    return (
      <>
        <Spinner />
      </>
    );
  }
  const cartList = cartStore.cartItems
    .map((cartItem) => ({
      ...productStore.getProductById(cartItem.productId),
      quantity: cartItem.quantity,
    }))
    .map((item) => <CartItem product={item} key={item.id} />);

  return (
    <>
      <List>{cartList}</List>
      <Button onPress={cartStore.checkout}>
        <Text style={{ color: "white" }}>Checkout</Text>
      </Button>
    </>
  );
};

export default observer(CartList);

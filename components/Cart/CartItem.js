/* Imports */
import React from "react";
import { List } from "native-base";
import { Text } from "react-native";

const CartItem = ({ product }) => {
  return (
    <>
      <List.Item>
        <Text>{product.name}</Text>
        <Text>
          {" " + product.price} x {product.quantity}
        </Text>
        <Text style={{ color: "red" }}>
          {" " + product.price * product.quantity + "KD"}
        </Text>
      </List.Item>
    </>
  );
};

export default CartItem;

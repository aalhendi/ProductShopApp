/* Imports */
import React from "react";
import { List } from "native-base";
import { Text } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
/* State and Store */
import cartStore from "../../stores/cartStore";

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
        <FontAwesome5
          name="trash"
          size={24}
          color="black"
          onPress={() => cartStore.deleteCartItem(product.id)}
        />
      </List.Item>
    </>
  );
};

export default CartItem;

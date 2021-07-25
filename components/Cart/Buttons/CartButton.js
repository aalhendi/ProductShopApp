/* Imports */
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const CartButton = () => {
  const navigation = useNavigation();
  return (
    <>
      <FontAwesome
        name="shopping-cart"
        size={24}
        color="black"
        onPress={() => navigation.navigate("CartList")}
      />
    </>
  );
};

export default CartButton;

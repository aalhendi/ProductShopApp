/* Imports */
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Button, Text } from "native-base";
/* State and Store */
import cartStore from "../../../stores/cartStore";
import { observer } from "mobx-react-lite";

const CartButton = () => {
  const navigation = useNavigation();
  return (
    <>
      <Button onPress={() => navigation.navigate("CartList")}>
        <FontAwesome name="shopping-cart" size={24} color="black" />
        <Text>{cartStore.totalQuantitiy}</Text>
      </Button>
    </>
  );
};

export default observer(CartButton);

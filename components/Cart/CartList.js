/* Imports */
import React from "react";
import { Button, List, Spinner, Text, View } from "native-base";
import { ScrollView } from "react-native";
/* Components */
import CartItem from "./CartItem";
/* State and Store */
import cartStore from "../../stores/cartStore";
import productStore from "../../stores/productStore";
import { observer } from "mobx-react-lite";
import authStore from "../../stores/authStore";

const CartList = ({ navigation }) => {
  const handleLogout = () => {
    authStore.logout();
    navigation.replace("Home");
  };

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
      <View style={{ flex: 1 }}>
        <ScrollView>
          <List style={{ justifyContent: "flex-start" }}>{cartList}</List>
        </ScrollView>
        <View style={{ flex: 1, justifyContent: "flex-end" }}>
          <Button onPress={cartStore.checkout} style={{ marginVertical: "1%" }}>
            <Text style={{ color: "white" }}>Checkout</Text>
          </Button>
          <Button onPress={handleLogout} style={{ marginVertical: "2%" }}>
            Logout
          </Button>
        </View>
      </View>
    </>
  );
};

export default observer(CartList);

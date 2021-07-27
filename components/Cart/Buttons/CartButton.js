/* Imports */
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Button, Text, View } from "native-base";
import { Alert } from "react-native";
/* State and Store */
import cartStore from "../../../stores/cartStore";
import { observer } from "mobx-react-lite";
import authStore from "../../../stores/authStore";

const CartButton = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    if (authStore.user) {
      navigation.navigate("CartList");
    } else {
      Alert.alert(
        "Not Logged In",
        "You must be logged in to access the cart",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel pressed"),
          },
          {
            text: "Login",
            onPress: () => navigation.navigate("Login"),
          },
        ],
        { cancelable: false }
      );
    }
  };

  return (
    <>
      <View style={{ flexDirection: "row" }}>
        <Button onPress={handlePress}>
          <FontAwesome name="shopping-cart" size={24} color="black" />
          <Text>{cartStore.totalQuantitiy}</Text>
        </Button>
      </View>
    </>
  );
};

export default observer(CartButton);

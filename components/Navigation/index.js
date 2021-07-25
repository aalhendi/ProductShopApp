/* Imports */
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

/* Components */
import Home from "../Home";
import ProducerList from "../Producer/ProducerList";
import ProducerDetail from "../Producer/ProducerDetail";
import CartList from "../Cart/CartList";
import CartButton from "../Cart/Buttons/CartButton";

const Stack = createStackNavigator();
export default RootNavigator = () => {
  return (
    <Stack.Navigator
      initalrouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#a1a1a1",
        },
        headerTintColor: "white",
        headerTintStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ProducerList"
        component={ProducerList}
        options={{
          title: "Select a Producer",
          headerRight: () => <CartButton />,
        }}
      />
      <Stack.Screen
        name="ProducerDetail"
        component={ProducerDetail}
        options={({ route }) => {
          const { producer } = route.params;
          return {
            title: producer.name,
            headerRight: () => <CartButton />,
          };
        }}
      />
      <Stack.Screen
        name="CartList"
        component={CartList}
        options={{
          title: "Cart",
        }}
      />
    </Stack.Navigator>
  );
};

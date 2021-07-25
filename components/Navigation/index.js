/* Imports */
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

/* Components */
import Home from "../Home";
import ProducerList from "../Producer/ProducerList";
import ProducerDetail from "../Producer/ProducerDetail";

const Stack = createStackNavigator();
export default RootNavigator = () => {
  return (
    <Stack.Navigator
      initalrouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#d9d9d9",
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
        }}
      />
      <Stack.Screen
        name="ProducerDetail"
        component={ProducerDetail}
        options={({ route }) => {
          const { producer } = route.params;
          return {
            title: producer.name,
          };
        }}
      />
    </Stack.Navigator>
  );
};

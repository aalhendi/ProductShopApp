/* Imports */
import React from "react";
import { Button, Text } from "react-native";

const Home = ({ navigation }) => {
  return (
    <>
      <Text>Hello</Text>
      <Button onPress={() => navigation.navigate("ProducerList")} title="Next">
        Next
      </Button>
      <Button onPress={() => navigation.navigate("CartList")} title="cart">
        Cart
      </Button>
    </>
  );
};

export default Home;

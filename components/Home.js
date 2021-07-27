/* Imports */
import React from "react";
import { View, Heading, Button } from "native-base";

const Home = ({ navigation }) => {
  return (
    <>
      <View style={{ flex: 1, alignItems: "center" }}>
        <View
          style={{
            marginTop: "10%",
            alignItems: "center",
          }}
        >
          <Heading>Hello,</Heading>
          <Heading>Welcome to the product shop</Heading>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: "flex-end",
            marginVertical: "2%",
            width: "90%",
          }}
        >
          <Button onPress={() => navigation.navigate("ProducerList")}>
            Next
          </Button>
        </View>
      </View>
    </>
  );
};

export default Home;

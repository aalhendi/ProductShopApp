/* Imports */
import React from "react";
import { List, Heading } from "native-base";
import { Image } from "react-native";

const ProducerItem = ({ producer, navigation }) => {
  return (
    <>
      <List.Item
        onPress={() =>
          navigation.navigate("ProducerDetail", { producer: producer })
        }
      >
        <Image
          source={{
            uri: producer.image,
          }}
          style={{ width: 100, height: 100 }}
        />
        <Heading>{producer.name}</Heading>
      </List.Item>
    </>
  );
};

export default ProducerItem;

import React from "react";
import { List, Heading } from "native-base";
import { Image } from "react-native";

const ProducerItem = ({ producer }) => {
  return (
    <>
      <List.Item onPress={() => alert("Hello")}>
        <Image
          source={{
            uri: producer.image,
          }}
          style={{ width: 200, height: 200 }}
        />
        <Heading>{producer.name}</Heading>
      </List.Item>
    </>
  );
};

export default ProducerItem;

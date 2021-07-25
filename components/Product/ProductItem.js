/* Import */
import React from "react";
import { Text, Image } from "react-native";
import { List } from "native-base";

const ProductItem = ({ product }) => {
  return (
    <>
      <List.Item>
        <Image
          source={{ uri: product.image }}
          style={{ width: 200, height: 100 }}
        />
        <Text>{product.name}</Text>
      </List.Item>
    </>
  );
};

export default ProductItem;

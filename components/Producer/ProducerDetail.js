/* Imports */
import React from "react";
import { Spinner } from "native-base";
import { View, Text, Image } from "react-native";
/* Components */
import ProductList from "../Product/ProductList";
/* State and Store */
import { observer } from "mobx-react-lite";
import producerStore from "../../stores/producerStore";
import productStore from "../../stores/productStore";

const ProducerDetail = ({ navigation, route }) => {
  const { producer } = route.params;

  if (producerStore.loading || productStore.loading) {
    return (
      <>
        <Spinner />
      </>
    );
  }

  // FIXME: ?
  const products = producer.products.map((product) =>
    productStore.getProductById(product.id)
  );
  console.log(
    "Product Store Products (ProducerDetail): ",
    productStore.products
  );
  console.log("Producer Detail, Products", products);

  return (
    <>
      <View>
        <Image source={{ uri: producer.image }} />
        <Text>{producer.name}</Text>
      </View>
      <View>
        <Text>Products</Text>
        <ProductList products={products} />
      </View>
    </>
  );
};

export default observer(ProducerDetail);

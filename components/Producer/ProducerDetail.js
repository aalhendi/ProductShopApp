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

  if (producerStore.loading) {
    return (
      <>
        <Spinner />
      </>
    );
  }

  const products = producer.products.map((product) =>
    productStore.getProductById(product.id)
  );

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

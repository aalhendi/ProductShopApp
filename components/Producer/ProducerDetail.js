/* Imports */
import React from "react";
import { Heading, Spinner, Text } from "native-base";
import { View, Image, ScrollView } from "react-native";
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
      <ScrollView>
        <View style={{ alignItems: "center" }}>
          <Heading>{producer.name}</Heading>
          <Image
            source={{ uri: producer.image }}
            style={{ height: 100, width: 100 }}
          />
        </View>
        <ProductList products={products} />
      </ScrollView>
    </>
  );
};

export default observer(ProducerDetail);

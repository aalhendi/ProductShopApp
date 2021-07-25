/* Import */
import React from "react";
import { List, Spinner } from "native-base";
import { View } from "react-native";
/* Components */
import ProductItem from "./ProductItem";
/* State and Store */
import productStore from "../../stores/productStore";
import { observer } from "mobx-react-lite";

const ProductList = ({ products }) => {
  if (productStore.loading) {
    return (
      <>
        <Spinner />
      </>
    );
  }

  const productList = products.map((product) => (
    <ProductItem product={product} key={product.id} />
  ));

  return (
    <>
      <View>
        <List>{productList}</List>
      </View>
    </>
  );
};

export default observer(ProductList);

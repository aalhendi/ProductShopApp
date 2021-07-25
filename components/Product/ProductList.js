/* Import */
import React from "react";
import { List, Spinner } from "native-base";
import { View } from "react-native";
/* Components */
import ProductItem from "./ProductItem";
/* State and Store */
import productStore from "../../stores/productStore";

const ProductList = ({ products }) => {
  if (productStore.loading) {
    return (
      <>
        <Spinner />
      </>
    );
  }

  console.log("Product List products, coming in as prop", products); //FIXME: Remove
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

export default ProductList;

/* Import */
import React from "react";
import { Text, Image, View } from "react-native";
import { List, Button } from "native-base";
import NumericInput from "react-native-numeric-input";
/* State and Store */
import { useState } from "react";
import cartStore from "../../stores/cartStore";

const ProductItem = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  const handleAdd = () => {
    const newItem = { productId: product.id, quantity };
    cartStore.addCartItem(newItem);
  };

  return (
    <>
      <View>
        <List.Item>
          <Image
            source={{ uri: product.image }}
            style={{ width: 100, height: 100 }}
          />
          <Text>{product.name}</Text>
          <NumericInput
            onChange={setQuantity}
            rounded
            maxValue={24}
            minValue={0}
            initValue={quantity}
          />
          <Button onPress={handleAdd}>
            <Text>Add</Text>
          </Button>
        </List.Item>
      </View>
    </>
  );
};

export default ProductItem;

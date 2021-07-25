/* Imports */
import React from "react";
import { ScrollView } from "react-native";
import { List, Heading, Spinner } from "native-base";
/* Components */
import ProducerItem from "./ProducerItem";
/* State and Store */
import producerStore from "../../stores/producerStore";
import productStore from "../../stores/productStore";
import { observer } from "mobx-react-lite";

const ProducerList = ({ navigation }) => {
  if (producerStore.loading || productStore.loading) {
    return (
      <>
        <Spinner />
      </>
    );
  }
  const producerList = producerStore.producers.map((producer) => (
    <ProducerItem
      producer={producer}
      key={producer.id}
      navigation={navigation}
    />
  ));

  return (
    <>
      <ScrollView>
        <Heading>List</Heading>
        <List>{producerList}</List>
      </ScrollView>
    </>
  );
};

export default observer(ProducerList);

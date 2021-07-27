/* Imports */
import React from "react";
import { ScrollView } from "react-native";
import { List, Spinner } from "native-base";
/* Components */
import ProducerItem from "./ProducerItem";
/* State and Store */
import producerStore from "../../stores/producerStore";
import { observer } from "mobx-react-lite";

const ProducerList = ({ navigation }) => {
  if (producerStore.loading) {
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
      <ScrollView style={{ height: "100%" }}>
        <List>{producerList}</List>
      </ScrollView>
    </>
  );
};

export default observer(ProducerList);

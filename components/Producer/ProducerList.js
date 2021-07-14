import React from "react";
import ProducerItem from "./ProducerItem";
import producerStore from "../../stores/producerStore";
import { observer } from "mobx-react-lite";
import { List, Heading, Spinner } from "native-base";

const ProducerList = () => {
  if (producerStore.loading) {
    return (
      <>
        <Spinner />
      </>
    );
  }
  const producerList = producerStore.producers.map((producer) => (
    <ProducerItem producer={producer} key={producer.id} />
  ));

  console.log(producerList);

  return (
    <>
      <Heading>List</Heading>
      <List>{producerList}</List>
    </>
  );
};

export default observer(ProducerList);

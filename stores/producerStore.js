import { makeAutoObservable } from "mobx";
import instance from "./instance";

class ProducerStore {
  producers = [];
  loading = true; // Not render before data is fetched

  constructor() {
    makeAutoObservable(this);
  }

  fetchProducers = async () => {
    try {
      const res = await instance.get("/producers");
      this.producers = res.data;
      this.loading = false;
    } catch (error) {
      console.error("error in fetchProducers: ", error);
    }
  };
}

const producerStore = new ProducerStore();
producerStore.fetchProducers();

export default producerStore;

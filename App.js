import React from "react";
import { NativeBaseProvider, Center, useColorModeValue } from "native-base";
/* Components */
import ThemeButton from "./components/ThemeButton";
import Home from "./components/Home";
/* State and Store */
import { observer } from "mobx-react-lite";
import ProducerList from "./components/Producer/ProducerList";

const App = () => {
  const LocalWrapper = ({ children }) => {
    const bg = useColorModeValue("gray.200", "gray.800");
    return (
      <Center flex={1} bg={bg}>
        {children}
      </Center>
    );
  };
  return (
    <NativeBaseProvider>
      <LocalWrapper>
        <ThemeButton />
        {/* <Home /> */}
        <ProducerList />
      </LocalWrapper>
    </NativeBaseProvider>
  );
};

export default observer(App);

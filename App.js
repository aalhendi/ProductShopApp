/* Imports */
import React from "react";
import { NativeBaseProvider } from "native-base";
import "react-native-gesture-handler"; //?
import { ThemeProvider } from "styled-components";
/* Navigation */
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./components/Navigation/index";
/* State and Store */
import { observer } from "mobx-react-lite";

const theme = {
  light: {
    mainColor: "#242424", // main font color
    backgroundColor: "#fefafb", // main background color
    pink: "#ff85a2",
    red: "#ff3232",
  },
  dark: {
    mainColor: "#fefafb", // main font color
    backgroundColor: "#242424", // main background color
    pink: "#ff85a2",
    red: "#ff3232",
  },
};

const App = () => {
  return (
    <NativeBaseProvider>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </ThemeProvider>
    </NativeBaseProvider>
  );
};

export default observer(App);

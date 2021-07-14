import React from "react";
import { useColorMode, Button } from "native-base";

const ThemeButton = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Button
        colorScheme={colorMode === "light" ? "blue" : "red"}
        onPress={() => {
          toggleColorMode();
        }}
      >
        Change Theme
      </Button>
    </>
  );
};

export default ThemeButton;

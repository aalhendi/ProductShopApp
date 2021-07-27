/* Import */
import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { Button, View } from "native-base";
import { TextInput } from "react-native-paper";
/* State and Store */
import authStore from "../../stores/authStore";
import { observer } from "mobx-react-lite";

const Login = ({ navigation }) => {
  const [userInfo, setUserInfo] = React.useState({
    username: "",
    password: "",
  });

  const handleSubmit = async () => {
    await authStore.login(userInfo);
    if (authStore.user) {
      navigation.replace("ProducerList");
    }
  };

  return (
    <>
      <View style={{ margin: "1%" }}>
        <TextInput
          label="username"
          autoCapitalize="none"
          onChangeText={(username) => setUserInfo({ ...userInfo, username })}
        />
        <TextInput
          label="password"
          autoCapitalize="none"
          secureTextEntry={true}
          onChangeText={(password) => setUserInfo({ ...userInfo, password })}
        />
      </View>
      <TouchableOpacity>
        <Button onPress={handleSubmit}>Login</Button>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Register")}>
        <Text style={{ textAlign: "center", marginTop: "1%" }}>
          Tap here to register
        </Text>
      </TouchableOpacity>
    </>
  );
};

export default observer(Login);

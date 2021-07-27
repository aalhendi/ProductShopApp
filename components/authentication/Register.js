/* Imports */
import React from "react";
import {
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import { View, Text, Button } from "native-base";
import { TextInput } from "react-native-paper";
/* State and Store */
import authStore from "../../stores/authStore";
import { observer } from "mobx-react-lite";

const Register = ({ navigation }) => {
  const keyboardVerticalOffset = Platform.OS === "ios" ? 40 : 0;
  const [userInfo, setUserInfo] = React.useState({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleSubmit = async () => {
    await authStore.register(userInfo);
    if (authStore.user) {
      navigation.replace("ProducerList");
    }
  };

  return (
    <>
      <ScrollView>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : null}
          keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
        >
          <View style={{ margin: "1%" }}>
            <TextInput
              label="username"
              autoCapitalize="none"
              onChangeText={(username) =>
                setUserInfo({ ...userInfo, username })
              }
            />
            <TextInput
              label="password"
              autoCapitalize="none"
              secureTextEntry={true}
              onChangeText={(password) =>
                setUserInfo({ ...userInfo, password })
              }
            />
            <TextInput
              label="First Name"
              onChangeText={(firstName) =>
                setUserInfo({ ...userInfo, firstName })
              }
            />
            <TextInput
              label="Last Name"
              onChangeText={(lastName) =>
                setUserInfo({ ...userInfo, lastName })
              }
            />
            <TextInput
              label="E-mail"
              onChangeText={(email) => setUserInfo({ ...userInfo, email })}
            />
          </View>
          <TouchableOpacity>
            <Button onPress={handleSubmit}>Register</Button>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </ScrollView>
    </>
  );
};
export default observer(Register);

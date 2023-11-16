import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  Button,
  Pressable,
  Alert,
} from "react-native";
import React, { useEffect, useRoute, useState } from "react";
import { Stack, Text } from "@react-native-material/core";
import { MaterialIcons } from "@expo/vector-icons";
import axios from "axios";

function App({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const postLogin = () => {
    const user = {
      email: email,
      password: password,
    };
    fetch("https://6544bdcd5a0b4b04436ce150.mockapi.io/TakeNote_Account", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        setEmail("");
        setPassword("");
        navigation.navigate("Login");
      })
      .catch((response) => response.json());
  };
  return (
    <View style={styles.container}>
      <View style={styles.container}>
      <Text style={{
        borderWidth: 1,
        padding: 10,
        backgroundColor: "aqua",
        width: "300px",
        textAlign: "center",
      }} onPress={() => navigation.goBack()}>Back</Text>
        <Image
          style={{
            width: "200px",
            height: "200px",
          }}
          source={require("../assets/Image92.png")}
        />
      </View>
      <Text>
        <h1>Sign Up</h1>
      </Text>
      <View style={styles.input}>
        <MaterialIcons name="email" size={24} color="black" />
        <TextInput
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={{
            paddingLeft: 10,
          }}
          placeholder="input your email"
        ></TextInput>
      </View>
      <View style={styles.input}>
        <MaterialIcons name="lock" size={24} color="black" />
        <TextInput
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={{
            paddingLeft: 10,
          }}
          placeholder="input your password"
        ></TextInput>
      </View>
      <Pressable
        style={{
          borderWidth: 1,
          padding: 5,
          backgroundColor: "aqua",
          marginVertical: "5px",
        }}
        onPress={() => {
          postLogin({
            email,
            password,
          });
        }}
      >
        Submit
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    flexDirection: "row",
    marginVertical: 5,
    borderWidth: 1,
    padding: 5,
  },
});

export default App;

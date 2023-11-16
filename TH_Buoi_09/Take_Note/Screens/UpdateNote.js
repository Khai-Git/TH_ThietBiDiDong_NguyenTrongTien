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
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

function App({ route, navigation }) {
  const [note, setNote] = useState("");
  const [loading, setLoading] = useState(true);

  const postId = route.params;
  // const { postNote } = route.params;
  console.log(route.params);
  // console.log(postId);

  useEffect(() => {
    fetch(`https://6544bdcd5a0b4b04436ce150.mockapi.io/noteList/${postId}`)
      .then((response) => response.json())
      // .then((json) => setNote(""))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  const getNote = () => {
    const noteList = {
      note: note,
    };
    axios
    .get(`https://6544bdcd5a0b4b04436ce150.mockapi.io/noteList/`)
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      Alert.alert("Error", err.message);
      console.log(err);
    });
  };

  const putNote = () => {
    const noteList = {
      note: note,
    };
    fetch(`https://6544bdcd5a0b4b04436ce150.mockapi.io/noteList/${postId}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ note }),
    })
      .then((response) => response.json(),
      console.log(response.json())
      )
      // .then((data) => {
      //   console.log("Success:", data);
      //   setNote("");
      //   navigation.navigate("TakeNote")
      // })
      .catch((response) => response.json());
  }

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Text
          style={{
            borderWidth: 1,
            padding: 10,
            backgroundColor: "aqua",
            width: "300px",
            textAlign: "center",
          }}
          onPress={() => navigation.goBack()}
        >
          Back
        </Text>
        <Image
          style={{
            width: "150px",
            height: "150px",
          }}
          source={require("../assets/Image92.png")}
        />
        <Text>
          <h1>Update Note</h1>
        </Text>
        <View>
          <Text>Content: </Text>
          <TextInput value={postId}></TextInput>
        </View>
        <Pressable
          style={{
            borderWidth: 1,
            margin: 10,
            padding: 10,
            backgroundColor: "lightblue",
          }}
          onPress={() => {
            putNote({
              note,
            });
          }}
        >
          Update
        </Pressable>
      </View>
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
});

export default App;

import {
  StyleSheet,
  View,
  Image,
  TextInput,
  Pressable,
  Alert,
} from "react-native";
import React, { useEffect, useRoute, useState } from "react";
import { Stack, Text } from "@react-native-material/core";
import axios from "axios";

function App({ route, navigation }) {
  const [note, setNote] = useState("");
  const [loading, setLoading] = useState(true);

  const postId = route.params;
  console.log(route.params);

  useEffect(() => {
    fetch(`https://6544bdcd5a0b4b04436ce150.mockapi.io/noteList/${postId}`)
      .then((response) => response.json())
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);
  const putNote = () => {
    const noteList = {
      note: note,
    };
    fetch(`https://6544bdcd5a0b4b04436ce150.mockapi.io/noteList/${postId}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ note }),
    })
      .then((response) => response.json(), console.log(response.json()))
      .catch((response) => response.json());
  };

  return (
    <View style={styles.container}>
      <View style={styles.container}>
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

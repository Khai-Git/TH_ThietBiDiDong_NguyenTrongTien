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

  const { postId } = route.params;
  const { postNote } = route.params;
  console.log(route.params);

  useEffect(() => {
    fetch(`https://6544bdcd5a0b4b04436ce150.mockapi.io/noteList/${postId}`)
      .then((response) => response.json())
      .then((json) => setNote(""))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);
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
          <TextInput value={route.params}></TextInput>
        </View>
        <Pressable
          style={{
            borderWidth: 1,
            margin: 10,
            padding: 10,
            backgroundColor: "lightblue",
          }}
          onPress={() => {
            postNote({
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

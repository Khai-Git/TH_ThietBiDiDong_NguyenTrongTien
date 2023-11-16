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

function App({ navigation }) {
    const [note,setNote] = useState("");
    const postNote = ()=>{
        const noteAdd = {
            note: note,
        };
        fetch("https://6544bdcd5a0b4b04436ce150.mockapi.io/noteList",{
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ note }),
        }).then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
          setNote("");
          navigation.navigate("TakeNote");
        })
        .catch((response) => response.json());
    }
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
            width: "150px",
            height: "150px",
          }}
          source={require("../assets/Image92.png")}
        />
        <Text>
          <h1>Add Note</h1>
        </Text>
        <TextInput
        value={note}
        onChangeText={(text) => setNote(text)}
        style={{
            borderWidth: 1,
            padding: 10,
            width: "300px",
          }}
          placeholder="Add text here"
        ></TextInput>
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
          Add
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

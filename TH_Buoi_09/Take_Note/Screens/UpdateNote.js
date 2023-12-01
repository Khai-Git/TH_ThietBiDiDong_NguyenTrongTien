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

  const idItem = route.params;
  // console.log(idItem);
  // console.log(idItem.note);
  // console.log(postId);
  // console.log(postNote);
  // console.log(route.params);

  const putNote = (id, note) => {
    fetch(`http://6544bdcd5a0b4b04436ce150.mockapi.io/noteList/${id}`, {
      method: "PUT",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({note:note})
    })
      .then((res) => {
        // console.log(res.status);
        // console.log(res.headers);
        return res.json();
      })
      .then(
        (result) => {
          console.log(result);
          setNote("")
          navigation.replace("TakeNote")
        },
        (error) => {
          console.log(error);
        }
        
      );
  };

  return (
    <View style={styles.container}>
      <Text style={{
        borderWidth: 1,
        padding: 10,
        backgroundColor: "aqua",
        width: "300px",
        textAlign: "center",
      }} onPress={() => navigation.goBack()}>Back</Text>
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
          <Text>Content: {idItem.note}</Text>
          <TextInput value={note} onChangeText={(text)=>setNote(text)}/>
        </View>
        <Pressable
          style={{
            borderWidth: 1,
            margin: 10,
            padding: 10,
            backgroundColor: "lightblue",
          }}
          onPress={() => {
            putNote(idItem.id,note);
          }}
        >
          <Text>Update</Text>
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

import { StyleSheet, View, Image, Pressable, ScrollView,} from "react-native";
import React, { useEffect, useRoute, useState } from "react";
import { Stack, Text } from "@react-native-material/core";

function App({ route,navigation }) {
  const {noteList} = route?.params;
  const [note, setNote] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://6544bdcd5a0b4b04436ce150.mockapi.io/noteList")
      .then((response) => response.json())
      .then((json) => setNote(json))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  const delNote = (id) => {
    fetch(`http://6544bdcd5a0b4b04436ce150.mockapi.io/noteList/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        console.log(res.status);
        console.log(res.headers);
        return res.json();
      })
      .then(
        (result) => {
          console.log(result);
        },
        (error) => {
          console.log(error);
        }
      );
  };

  return (
    <ScrollView>
      <Pressable
        style={{
          borderWidth: 1,
          alignItems: "center",
          justifyContent: "center",
          height: "50px",
        }}
        onPress={navigation.goBack()}
      >
        Back
      </Pressable>
      <View style={styles.container}>
        <Image
          style={{
            width: "100px",
            height: "100px",
          }}
          source={require("../assets/Image92.png")}
        />
        <View>
          {loading ? (
            <Text>Loading .....</Text>
          ) : (
            note.map((post) => (
              <View
                style={{
                  padding: 10,
                }}
              >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Text style={{ paddingRight: 10 }}>
                    Id note: {post.id} |
                  </Text>
                  <Pressable
                    onPress={() => navigation.navigate("UpdateNote", note)}
                  >
                    Update
                  </Pressable>
                  <Text> | </Text>
                  <Pressable onPress={() => delNote(post.id)}>Delete</Pressable>
                </View>
                <Text>Content: </Text>
                <Text>{post.note}</Text>
              </View>
            ))
          )}
        </View>
        <Pressable
          style={{
            borderWidth: 1,
            padding: 10,
            marginTop: "50px",
          }}
          onPress={() => navigation.navigate("AddNote")}
        >
          Add Note
        </Pressable>
      </View>
    </ScrollView>
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

import { StyleSheet, View, Image, Pressable, ScrollView,} from "react-native";
import React, { useEffect, useRoute, useState } from "react";
import { Stack, Text } from "@react-native-material/core";

function App({ route,navigation }) {
  const [note, setNote] = useState("");
  const [loading, setLoading] = useState(true);

  const noteList = [useEffect(() => {
    fetch("https://6544bdcd5a0b4b04436ce150.mockapi.io/noteList")
      .then((response) => response.json())
      .then((json) => setNote(json))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  },[])]
  

  const delNote = (id) => {
    fetch(`http://6544bdcd5a0b4b04436ce150.mockapi.io/noteList/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        // console.log(res.status);
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
            note.map((item,index) => (
              <View
              key={index}
                style={{
                  padding: 10,
                }}
              >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Text style={{ paddingRight: 10 }}>
                    Id note: {item.id} |
                  </Text>
                  <Pressable
                    onPress={() => navigation.navigate("UpdateNote", item)}
                  >
                    <Text>Update</Text>
                  </Pressable>
                  <Text> | </Text>
                  <Pressable onPress={() => delNote(item.id)}><Text>Delete</Text></Pressable>
                </View>
                <Text>Content: {item.note}</Text>
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
          <Text>Add Note</Text>
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

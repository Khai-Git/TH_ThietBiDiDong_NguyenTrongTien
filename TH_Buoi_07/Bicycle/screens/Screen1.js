import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  Button,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { Stack, Text } from "@react-native-material/core";

function App({ navigation }) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.textVT323}>
          A premium online store for sporter and their stylish choice
        </Text>
      </View>
      <View
        style={{
          width: "350px",
          height: "350px",
          borderRadius: "30px",
          backgroundColor: "pink",
          justifyContent: "center",
          alignItems: "center",
          margin: 10,
        }}
      >
        <Image
          style={{
            width: "250px",
            height: "250px",
            resizeMode: "contain",
          }}
          source={require("../assets/Mountainbike-blue.png")}
        />
      </View>
      <View style={{ paddingBottom: "50px" }}>
        <Text style={styles.textUbutu}>POWER BIKE</Text>
        <Text style={styles.textUbutu}>SHOP</Text>
      </View>
      <Pressable
        style={{
          backgroundColor: "#E94141",
          width: "90%",
          height: "50px",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "30px",
          color: "white",
          fontFamily: "VT323",
          fontSize: "26px",
          fontWeight: "400",
          lineHeight: "26px",
          letterSpacing: "0em",
          textAlign: "center",
          padding: "20px",
        }}
        onPress={() => navigation.navigate("Screen2")}
      >
        Get Start
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
  textVT323: {
    fontFamily: "VT323",
    fontSize: "26px",
    fontWeight: "400",
    lineHeight: "26px",
    letterSpacing: "0em",
    textAlign: "center",
    padding: "20px",
  },
  textUbutu: {
    fontFamily: "Ubuntu",
    fontSize: "26px",
    fontWeight: "700",
    lineHeight: "30px",
    letterSpacing: "0em",
    textAlign: "center",
  },
});

export default App;
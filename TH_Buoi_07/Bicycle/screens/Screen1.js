import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
} from "react-native";
import React, { useState } from "react";
import { Stack, Text } from "@react-native-material/core";

function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View>
          <Text
            style={{
              fontFamily: "VT323",
              fontSize: "26px",
              fontWeight: "400",
              lineHeight: "26px",
              letterSpacing: "0em",
              textAlign: "center",
            }}
          >
            A premium online store for sporter and their stylish choice
          </Text>
        </View>
        <View>
          <Image
            style={{
              width: "250px",
              height: "250px",
              resizeMode: "contain",
            }}
            source={require("../assets/Mountainbike-blue.png")}
          />
        </View>
        <View>
          <Text
            style={{
              fontFamily: "Ubuntu",
              fontSize: "26px",
              fontWeight: "700",
              lineHeight: "30px",
              letterSpacing: "0em",
              textAlign: "center",
            }}
          >
            POWER BIKE SHOP
          </Text>
        </View>
        <Button title="Get Start" onClick={() => {}}></Button>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 30,
    backgroundImage: "#FFFFFF",
  },
});

export default App;

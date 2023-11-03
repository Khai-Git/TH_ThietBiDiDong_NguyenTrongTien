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
      <View style={{
        flexDirection: "row",
      }}>
        <Image style={{
          width: "40px",
          height: "40px",
        }} source={require("../assets/Icon-Left-Button.png")} />
        
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
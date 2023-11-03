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
          <Text>Hello</Text>
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
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
import { NavigationContainer } from "@react-navigation/native";

function App({ navigation }) {
  return (
    <View style={styles.container}>
      <View
        style={{
          width: "330px",
          height: "330px",
          borderRadius: "5px",
          backgroundColor: "#E941411A",
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
          source={require("../assets/Mountainbike-red.png")}
        />
      </View>
      <View
        style={{
          textAlign: "left",
        }}
      >
        <Text
          style={{
            fontFamily: "Ubuntu",
            fontSize: "26px",
            fontWeight: "700",
            lineHeight: "30px",
            letterSpacing: "0em",
          }}
        >
          Pina Mountain
        </Text>
      </View>
      <View>
        <Text
          style={{
            fonFamily: "Voltaire",
            fontSize: "25px",
            fontWeight: 400,
            lineHeight: "31px",
            letterSpacing: "0em",
            textAlign: "center",
            color: "#00000096",
          }}
        >
          15% OFF | 350$
          <Text
            style={{
              fonFamily: "Voltaire",
              fontSize: "25px",
              fontWeight: 400,
              lineHeight: "31px",
              letterSpacing: "0em",
              textAlign: "center",
              textDecoration: "line-through",
              paddingLeft: "30px",
            }}
          >
            449$
          </Text>
        </Text>
      </View>
      <View
        style={{
          paddingHorizontal: "30px",
        }}
      >
        <Text
          style={{
            fontFamily: "Voltaire",
            fontSize: "26px",
            fontWeight: "700",
            lineHeight: "30px",
            letterSpacing: "0em",
            marginVertical: "20px",
          }}
        >Description
        </Text>
        <Text
          style={{
            fontFamily: "Voltaire",
            fontSize: "22px",
            fontWeight: 400,
            lineHeight: "27px",
            letterSpacing: "0em",
            textAlign: "left",
            marginBottom: "20px",
          }}
        >
          It is a very important form of writing as we write almost everything
          in paragraphs, be it an answer, essay, story, emails, etc.
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          style={{
            width: "30px",
            height: "30px",
          }}
          source={require("../assets/akar-icons_heart.png")}
        />
        <Pressable
          style={{
            backgroundColor: "#E94141",
            width: "280px",
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
            marginLeft: "30px",
          }}
          onPress={() => navigation.navigate("Screen2")}
        >
          Add to card
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
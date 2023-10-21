import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import StackNavigator from "./Navigation/StackNavigator";

const bike = [];

export default function App() {
  return (
    <View style={styles.container}>
      {/* <StackNavigator /> */}{" "}
      <View>
        <Text
          style={{
            fontFamily: "Ubuntu",
            fontSize: "25px",
            fontWeight: "700",
            lineHeight: "29px",
            letterSpacing: "0em",
            textAlign: "center",
          }}
        >
          The world’ s Best Bike{" "}
        </Text>{" "}
      </View>{" "}
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <Button title="All"> </Button> <Button title="Roadbike"> </Button>
        <Button title="Mountain"> </Button>{" "}
      </View>{" "}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

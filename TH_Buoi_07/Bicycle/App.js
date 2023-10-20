import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import StackNavigator from "./Navigation/StackNavigator";

export default function App() {
  return (
    <View style={styles.container}>
      {" "}
      {/* <StackNavigator />{" "} */}{" "}
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
          A premium online store for sporter and their stylish choice{" "}
        </Text>{" "}
      </View>{" "}
      <View>
        <Image
          source={require("../Bicycle/assets/Mountainbike-blue.png")}
          style={{
            width: "250px",
            height: "250px",
            resizeMode: "contain",
          }}
        />{" "}
      </View>{" "}
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
          POWER BIKE SHOP{" "}
        </Text>{" "}
      </View>{" "}
      <Button title="Get Start" onClick={() => {}}>
        {" "}
      </Button>{" "}
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

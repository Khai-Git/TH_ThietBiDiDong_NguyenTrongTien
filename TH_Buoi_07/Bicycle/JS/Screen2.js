import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
} from "react-native";
import { Stack, Text } from "@react-native-material/core";

function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
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
          {" "}
          The world’ s Best Bike{" "}
        </Text>{" "}
      </View>{" "}
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <Button title="All"> </Button> <Button title="Roadbike"> </Button>{" "}
        <Button title="Mountain"> </Button>{" "}
      </View>{" "}
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

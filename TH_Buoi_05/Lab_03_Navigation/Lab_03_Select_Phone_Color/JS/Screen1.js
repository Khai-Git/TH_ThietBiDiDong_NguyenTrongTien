import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { Stack, Text } from "@react-native-material/core";
import img_Blue_VS from "../assets/vs_blue.png";

function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Image
          source={require("../assets/vs_blue.png")}
          style={{
            width: "50%",
            height: "50%",
            resizeMode: "contain",
          }}
        />
        <Text> Điện Thoại Vsmart Joy 3 - Hàng chính hãng </Text>
        <View style={{ flexDirection: "row", margin: 10 }}>
          <View
            style={{
              flexDirection: "row",
              marginRight: "30px",
            }}
          >
            <Image source={require("../assets/star.png")} />
            <Image source={require("../assets/star.png")} />
            <Image source={require("../assets/star.png")} />
            <Image source={require("../assets/star.png")} />
            <Image source={require("../assets/star.png")} />
          </View>
          <View>
            <Text> (Xem 828 đánh giá) </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            margin: 10,
          }}
        >
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <Text
              style={{
                fontSize: "25px",
                fontWeight: "bold",
              }}
            >
              1.790 .000
            </Text>
          </View>
          <View>
            <Text
              style={{
                textDecorationLine: "line-through",
              }}
            >
              1.790 .000
            </Text>
          </View>
        </View>
        <View>
          <Text> Ở ĐÂU RẺ HƠN HOÀN TIỀN </Text>
        </View>
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

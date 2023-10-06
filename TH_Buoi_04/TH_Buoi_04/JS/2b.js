import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import USB from "./assets/usb.png";
import Star from "./assets/Star.png";
import Camera from "./assets/camera.png";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.gradient}>
        {/* <Image src={USB}></Image> */}
        <Text>
          USB Bluetooth Music Receiver HJX-001- Biến loa thường thành loa
          bluetooth
        </Text>

        <Text>Cực kỳ hài lòng</Text>
        {/* <Image src={Star}></Image> */}

        {/* <Image src={Camera}></Image> */}
        <Text>Thêm hình ảnh</Text>

        <Text>Hãy chia sẻ những điều mà bạn thích về sản phẩm</Text>
        <Text>https://meet.google.com/nsj-ojwi-xpp</Text>

        <input value="Gửi"></input>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
  gradient: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});

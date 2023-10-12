import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import USB from "../assets/usb.png";
import Star from "../assets/Star.png";
import Camera from "../assets/camera.png";
import { Button, TextInput } from "@react-native-material/core";
import Icon from "react-native-vector-icons/FontAwesome5";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 20,
      }}>
      <Icon name="usb"/>
      <Text style={{ fontWeight: "bold" }}>
        USB Bluetooth Music Receiver HJX-001- Biến loa thường thành loa
        bluetooth
      </Text>
      </View>

      <View
        style={{
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 20,
          }}
        >
          Cực kỳ hài lòng
        </Text>
        <View style={{
          flexDirection: "row",
        }}>
          <Icon name="star" />
          <Icon name="star" />
          <Icon name="star" />
          <Icon name="star" />
          <Icon name="star" />
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          margin: 10,
          justifyContent: "center",
          height: 60,
          width: "90%",
          borderColor: "gray",
          borderWidth: 1,
          borderRadius: 5,
          paddingLeft: 20,
          backgroundColor: "white",
        }}
      >
        <Icon name="camera" size={35} color={"black"} />
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            paddingLeft: 10,
          }}
        >
          Thêm hình ảnh
        </Text>
      </View>

      <View
        style={{
          // flexDirection: "row",
          // alignItems: "center",
          margin: 10,
          // justifyContent: "center",
          height: "40%",
          width: "90%",
          borderColor: "gray",
          borderWidth: 1,
          paddingLeft: 10,
          paddingVertical: 5,
          backgroundColor: "white",
          borderColor: "gray",
          borderWidth: 1,
          borderRadius: 5,
        }}
      >
        <Text
          style={{
            color: "#C4C4C4",
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          Hãy chia sẻ những điều mà bạn thích về sản phẩm
        </Text>
        <Text
          style={{
            paddingTop: 180,
            paddingLeft: 60,
            fontWeight: "bold",
          }}
        >
          https://meet.google.com/nsj-ojwi-xpp
        </Text>
      </View>

      <View style={{
        alignItems: "center",
        justifyContent: "center",
      }}>
      <Button style={{
        width: "95%",
      }} title="Gửi" />
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
  textinput: {
    width: "80%",
    marginLeft: 10,
    fontSize: 20,
  },
});

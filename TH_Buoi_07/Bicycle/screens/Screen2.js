import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  Pressable,
  FlatList,
  ScrollView,
} from "react-native";
import { Stack, Text } from "@react-native-material/core";
import bike from "../data/dataBike";

function App({ navigation }) {
  const renderBike = ({ item }) => {
    return (
      <View style={{ flexDirection: "row", alignItems: "center", paddingTop: 10 ,paddingLeft: 10 }}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Screen3")}
        >
          <View
            style={{
              height: "210px",
              width: "167px",
              backgroundColor: "#F7BA8326",
              borderTopRightRadius: 10,
              borderBottomRightRadius: 10,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "10px",
            }}
          >
            <Image style={{
              width: "20px",
              height: "20px",
              position: "absolute",
              top: 10,
              left: 10,
            }} source={require("../assets/akar-icons_heart.png")}/>
            <Image
              source={item.image}
              style={{
                width: "70%",
                height: "70%",
                resizeMode: "contain",
              }}
            />
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              {item.name}
            </Text>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              {item.price}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <View>
        <Text
          style={{
            color: "red",
            fontWeight: "bold",
            fontFamily: "Ubuntu",
            fontSize: "25px",
            fontWeight: "700",
            lineHeight: "29px",
            letterSpacing: "0em",
            textAlign: "start",
            marginVertical: "20px",
          }}
        >
          The world's Best Bike
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginVertical: "10px",
        }}
      >
        <Pressable
          style={{
            fontFamily: "Voltaire",
            backgroundColor: "transparent",
            width: "25%",
            height: "30px",
            justifyContent: "center",
            alignItems: "center",
            borderWidth: "1px",
            borderRadius: "5px",
            borderColor: "red",
            color: "red",
            fontWeight: "bold",
          }}
        >
          All
        </Pressable>
        <Pressable
          style={{
            fontFamily: "Voltaire",
            backgroundColor: "transparent",
            width: "25%",
            height: "30px",
            justifyContent: "center",
            alignItems: "center",
            borderWidth: "1px",
            borderRadius: "5px",
            borderColor: "red",
            color: "silver",
            fontWeight: "bold",
          }}
        >
          Roadbike
        </Pressable>
        <Pressable
          style={{
            fontFamily: "Voltaire",
            backgroundColor: "transparent",
            width: "25%",
            height: "30px",
            justifyContent: "center",
            alignItems: "center",
            borderWidth: "1px",
            borderRadius: "5px",
            borderColor: "red",
            color: "silver",
            fontWeight: "bold",
          }}
        >
          Mountain
        </Pressable>
      </View>
      <ScrollView>
        <View>
          <FlatList
            data={bike}
            renderItem={renderBike}
            keyExtractor={(item) => item.id}
            style={{
              flexWrap: "wrap",
            }}
            contentContainerStyle={styles.content}
            horizontal={false}
            numColumns={2}
          />
        </View>
      </ScrollView>
    </View>
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

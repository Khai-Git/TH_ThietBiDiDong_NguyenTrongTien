import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";

export default function App() {
  return (
    <SafeAreaView>
      <View>
        
      </View>
    </SafeAreaView>
    // <View style={styles.container}>
    //   <View style={styles.gradient}>
    //     <div>
    //       <div style={styles.divTitle}>
    //         <h1> LOGIN </h1>
    //       </div>
    //       <div>
    //         <div style={styles.divInput}>
    //           <Ionicons
    //             style={styles.icon}
    //             name="person"
    //             size={24}
    //             color="black"
    //           />
    //           <input style={styles.input} value="Name"></input>
    //         </div>
    //         <br></br>
    //         <div style={styles.divInput}>
    //           <Fontisto name="locked" size={24} color="black" />
    //           <input style={styles.input} value="Password"></input>
    //           <AntDesign name="eye" size={24} color="black" />
    //         </div>

    //         <button style={styles.button}> LOGIN </button>

    //         <b> Forgot your password ? </b>
    //       </div>
    //     </div>
    //   </View>
    // </View>
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
    backgroundImage: "linear-gradient(to bottom, #FBCB00, #BF9A00)",
    alignItems: "center",
    justifyContent: "center",
  },
  divTitle: {
    justifyContent: "flex-start",
    alignItems: "center",
  },
  divInput: {
    flexDirection: "row",
    width: 330,
    border: "1 solid white",
    backgroundColor: "#C4C4C44D",
    // backgroundImage: 'linear-gradient(to bottom, #F2F2F2, #C4C4C44D)',
  },
  input: {
    width: 330,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    border: "0",
  },
  icon: {
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: 330,
    height: 45,
    backgroundColor: "black",
    color: "white",
    font: "Bold",
  },
});

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import "./css/index.css";
import { LinearGradient } from "expo-linear-gradient";
import emailIcon from "./assets/icons8-email-50.png";
import Lock from "./assets/icons8-lock-96.png";


export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.gradient}>
      <img className="image" src={Lock}/>
      <h1>FORGET</h1>
      <h1>PASSWORD</h1>
      <b>Provide your account’s email for which you want to reset your password</b>
      <br/>
      <br/>
      <input id='email' value='Email'></input>
      <br/>
      <br/>
      <br/>
      <div id="submitbtn">
        <input type="submit" value="NEXT" id="btn" />
      </div>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00FFFF",
    alignItems: "center",
    justifyContent: "center",
  },
  gradient: {
    flex: 1,
    width: '100%',
    backgroundImage: 'linear-gradient(to bottom, #C7F4F6, #D1F4F6, #E5F4F5, #00CCF9)',
    alignItems: "center",
    justifyContent: "center",
  },
});

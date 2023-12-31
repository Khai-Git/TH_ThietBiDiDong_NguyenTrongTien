import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { Stack, Text } from "@react-native-material/core";

function App() {
  return (
    <View style={styles.container}>
     

      <View style={styles.form}>
        <Stack spacing={30}>
          <View style={{ marginVertical: 50 }}>
            <Text style={{fontWeight: "bold"}} variant="h3">Log In</Text>
          </View>
          <View  style={styles.input}>
            <Icon name="user-alt" size={30} color="black" />
            <TextInput
              placeholder="Name"
              variant="outlined"
              keyboardType="number-pad"
              style={styles.textinput}
            />
          </View>
          <View flexDirection="row" style={styles.input}>
            <Icon name="key" size={30} color="black" />
            <TextInput
              placeholder="Password"
              secureTextEntry
              variant="outlined"
              style={styles.textinput}
            />
            <Icon style={{paddingRight: 15}} name="eye" size={30} color="black"/>
          </View>

          <View style={{ alignItems: "center" }}>
            <TouchableOpacity style={styles.login}>
              <Text style={{ color: "white", fontSize: 20 }}>Log In</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.forget}>
              <View  style={{ alignItems: "center" ,flexDirection:'row'}}>
                <Text style={styles.text1}>Forgot Your Password?</Text>
              </View>
            </TouchableOpacity>
          </View>
        </Stack>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text1: {
    color: "black",
    fontWeight: "bold",
  },
  header: {
    height: 100,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  forget: {
    marginTop: 50,
  },
  textinput: {
    width: "80%",
    marginLeft: 10,
    fontSize: 20,
    border: 1,
  },
  input: {
    height: 60,
    width: "100%",
    borderColor: "gray",
    borderWidth: 1,
    paddingLeft: 20,
    backgroundColor: "#C4C4C44D",
    alignItems: "center",
    flexDirection:'row'
  },
  login: {
    backgroundColor: "black",
    padding: 10,
    alignItems: "center",
    width: "100%",
  },

  container: {
    flex: 1,
    padding: 20,
    paddingTop: 30,
    backgroundImage: "linear-gradient(to bottom, #FBCB00, #BF9A00)",
  },

  form: {
    width: "100%",
    justifyContent: "center",
  },
  tinyLogo: {
    resizeMode: "contain",
    width: 100,
    height: 100,
  },
});

export default App;

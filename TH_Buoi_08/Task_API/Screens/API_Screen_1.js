import {
    StyleSheet,
    View,
    Image,
    TouchableOpacity,
    TextInput,
    SafeAreaView,
    Button,
    Pressable,
} from "react-native";
import React, { useState } from "react";
import { Stack, Text } from "@react-native-material/core";

function App({ navigation }) {
    return (
        <View style={styles.container}>
            <Image style={{
                resizeMode: "contain",
                width: "60%",
                height: "60%",
            }} source={require("../assets/Image95.png")} />
            <Text style={{
                fontFamily: "Epilogue",
                fontSize: "24px",
                fontWeight: "700",
                lineHeight: "36px",
                letterSpacing: "0em",
                textAlign: "center",
                color: "#8353E2",
            }}>MANAGE YOUR</Text>
            <Text style={{
                fontFamily: "Epilogue",
                fontSize: "24px",
                fontWeight: "700",
                lineHeight: "36px",
                letterSpacing: "0em",
                textAlign: "center",
                color: "#8353E2",
            }}>TASK</Text>
            <View style={{
                flexDirection: "row",
                borderWidth: 1,
                width: "80%",
                height: "40px",
                borderRadius: "10px",
                borderColor: "silver",
                justifyContent: "center",
                margin: "20px"
            }}>
                <Image style={{
                    width: "20px",
                    height: "20px",
                    margin: "10px",
                }} source={require("../assets/Mail.png")} />
                <TextInput style={{
                    width: "100%",
                }} placeholderTextColor="silver" placeholder="Enter your name"></TextInput>
            </View>
            <Pressable style={{
                backgroundColor: "#00BDD6",
                width: "190px",
                height: "44px",
                padding: "9px, 33px, 9px, 29px",
                borderRadius: "12px",
                angle: "-0 deg",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
                marginTop: "50px",
            }} onPress={() => navigation.navigate("Screen2")}>GET STARTED --></Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
    },
});

export default App;
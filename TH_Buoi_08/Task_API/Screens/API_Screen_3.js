import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, Pressable } from 'react-native';
import { useNavigation } from "@react-navigation/native"
import React, { useEffect, useState } from 'react';

export default function Screen2({ route, navigation }) {
    return (
        <View style={style.container}>
            <View style={{ display: "flex", flexDirection: "row", marginTop: 30, marginLeft: "30px" }}>
                <Pressable onPress={() => navigation.goBack()} style={style.Header}>
                    <Image source={require("../assets/Icon-Left-Button.png")}  style={style.iconArrow}/>
                </Pressable>
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        display: "flex",
    },

    iconArrow: {
        width: 36,
        height: 36,
    }
});
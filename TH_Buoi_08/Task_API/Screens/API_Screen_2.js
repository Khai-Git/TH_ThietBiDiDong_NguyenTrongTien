import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, Pressable } from 'react-native';
import { useNavigation } from "@react-navigation/native"
import React, { useEffect, useState } from 'react';

export default function Screen2({ route, navigation }) {
    const [data, setData] = useState([]);
    useEffect(() => {
        const getData = async () => {
            const response = await fetch(
                'https://6544bdcd5a0b4b04436ce150.mockapi.io/API_Lab_08',
                {
                    method: 'GET',
                    headers: {
                        'x-rapidapi-host': 'carbonfootprint1.p.rapidapi.com',
                        'x-rapidapi-key': 'your_api_key'
                    }
                }
            ).then(res => res.json()
            ).then(out => {
                setData(out)
                console.log(out);
            }
            )
        }
        getData()
        console.log(data);
    }, [])

    const {nameTextInput} = route.params;

    return (
        <View style={style.container}>
            <View style={{ display: "flex", flexDirection: "row", marginTop: 30, marginLeft: "30px" }}>
                <Pressable onPress={() => navigation.goBack()} style={style.Header}>
                    <Image source={require("../assets/Icon-Left-Button.png")}  style={style.iconArrow}/>
                </Pressable>
                <View style={{ display: "flex", flexDirection: "row", marginLeft: "100px", }}>
                    <View>
                        {/* <Image style={{ height: "50px", width: "50px" }} source={{uri: data[0]?.image}}/> */}
                        <Image style={{ height: "50px", width: "50px" }} source={require('../assets/Frame.png')}/>
                    </View>
                    <View style={{
                      marginLeft: "10px",
                    }}>
                        {/* <h2 style={{ margin: 0 }}>{data[0]?.name}</h2> */}
                        <h2 style={{ margin: 0 }}>{nameTextInput}</h2>
                        <p style={{ margin: 0 }}>Have a great day ahead</p>
                    </View>
                </View>
            </View>
            <View style={{ alignItems: "center", justifyContent: "center" }}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 30,
                    border: '1px solid black',
                    borderRadius: 2,
                    width: '80%',
                    height: 50,
                    alignItems: "center"
                }}>
                    <Image source={require('../assets/Mail.png')} style={{ width: 20, height: 20, marginRight: 10, marginLeft: 10 }} />
                    <TextInput style={style.InputName} placeholder='Search' />
                </View>
            </View>
            <View style={{ justifyContent: "center", alignItems: "center", marginTop: 30 }}>
                {data[0]?.todoList?.map(item => {
                    return <View style={{
                         width: "335px", height: "48px", marginTop:10,
                    backgroundColor: "#DEE1E6", borderRadius: "50px",
                     display: "flex", flexDirection: "row", 
                     alignItems: "center", 
                     justifyContent: "space-around" }}>
                        <Image style={{ height: "30px", width: "30px" }} source={require("../assets/Check.png")} />
                        <h3>{item}</h3>
                        <Image style={{ height: "30px", width: "30px" }} source={require("../assets/Write.png")} />
                    </View>
                })}

            </View>
            <View style={{ alignItems: "center", alignItems: "center", marginTop: 30 }}>
                <Pressable onPress={() => navigation.navigate("Screen3")} style={{ height: "50px", width: "50px", borderRadius: "50%", backgroundColor: "green", alignItems: "center", justifyContent: "center", color: "white" }}>
                    +
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
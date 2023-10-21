import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Screen1 from "../JS/Screen1";
import Screen2 from "../JS/Screen2";
import Screen3 from "../JS/Screen3";

import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const StackNavigator = () => {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  function BottomTabs() {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name="Screen1"
          component={Screen1}
          options={{
            tabBarLabel: "Screen1",
            TabBarLabelStyle: { color: "#000E97" },
            headerShown: false,
            tabBarIcon: ({ focus }) =>
              focused ? (
                <Entypo name="home" size={24} color="black" />
              ) : (
                <Feather name="home" size={24} color="black" />
              ),
          }}
        />{" "}
      </Tab.Navigator>
    );
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {" "}
        {
          <Stack.Screen
            name="Screen1"
            component={Screen1}
            options={{ headerShown: false }}
          />
        }{" "}
      </Stack.Navigator>{" "}
    </NavigationContainer>
  );
};

export default StackNavigator;

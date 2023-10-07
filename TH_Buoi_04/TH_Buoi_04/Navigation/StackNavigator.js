import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import page2a from '../JS/2a';
import page2b from '../JS/2b';
import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const StackNavigator = () => {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  function BottomTabs() {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={page2a}
          options={{
            tabBarLabel: "Home",
            TabBarLabelStyle: { color: "#000E97" },
            headerShown: false,
            tabBarIcon: ({ focus }) =>
              focused ? (
                <Entypo name="home" size={24} color="black" />
              ) : (
                <Feather name="home" size={24} color="black" />
              ),
          }}
        />
        <Tab.Screen
          name="Home"
          component={page2b}
          options={{
            tabBarLabel: "Profile",
            TabBarLabelStyle: { color: "#000E97" },
            headerShown: false,
            tabBarIcon: ({ focus }) =>
              focused ? (
                <Entypo name="home" size={24} color="black" />
              ) : (
                <Feather name="home" size={24} color="black" />
              ),
          }}
        />
      </Tab.Navigator>
    );
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;

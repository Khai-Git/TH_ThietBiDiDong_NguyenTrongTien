import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "../Take_Note/Screens/Login"
import SignUp from "../Take_Note/Screens/SignUp"
import TakeNote from "../Take_Note/Screens/TakeNote"
import AddNote from "../Take_Note/Screens/AddNote"
import UpdateNote from "../Take_Note/Screens/UpdateNote"

const Stack = createNativeStackNavigator();

export default function App() {
  return (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
      <Stack.Screen name="SignUp" component={SignUp} options={{headerShown: false}}/>
      <Stack.Screen name="TakeNote" component={TakeNote} options={{headerShown: false}}/>
      <Stack.Screen name="AddNote" component={AddNote} options={{headerShown: false}}/>
      <Stack.Screen name="UpdateNote" component={UpdateNote} options={{headerShown: false}}/>
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

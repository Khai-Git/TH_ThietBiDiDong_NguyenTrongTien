import react from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>Open up App.js to start working on your app!</Text> */}
      
      <h1>GROW</h1>
      <h1>YOUR BUSINESS</h1>
      <br></br>
      <br></br>
      <b>We will help you to grow your business using online server</b>
      <br></br>
      <br></br>
      <div>
        <input type='submit' value='LOGIN'></input>
        <input type='submit' value='SIGN UP'></input>
      </div>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    background: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

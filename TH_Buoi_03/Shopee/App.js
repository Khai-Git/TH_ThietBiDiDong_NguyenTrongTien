import react from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Logo from './assets/Circle.png';
import './css/index.css';

export default function App() {
  return (
    <View style={styles.container}>
      <img className="img" src={Logo}/>
      <br></br>
      <br></br>
      <h1>GROW</h1>
      <h1>YOUR BUSINESS</h1>
      <br></br>
      <br></br>
      <b>We will help you to grow your business using online server</b>
      <br></br>
      <br></br>
      <div id='submitbtn'>
        <input type='submit' value='LOGIN' id='btn'/>
        <input type='submit' value='SIGN UP' id='btn'/>
      </div>
      <StatusBar style="auto" />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00ffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


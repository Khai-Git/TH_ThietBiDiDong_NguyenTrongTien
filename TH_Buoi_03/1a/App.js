import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Logo from './assets/Circle.png';
import './css/index.css'
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
    return (
        <View style={styles.container}>
            <img className="img" src={Logo} />
            <br />
            <h1>GROW</h1>
            <h1>YOUR BUSINESS</h1>
            <b>We will help you to grow your business using online server</b>
            <br></br>
            <div id='submitbtn' >
                <input type='submit' value='LOGIN' id='btn' />
                <input type='submit' value='SIGN UP' id='btn' />
            </div>
            <br />
            <br />
            <b>HOW WE WORK?</b>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        background: '#005DD7',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
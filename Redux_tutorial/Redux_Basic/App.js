import { StyleSheet, Text, View } from 'react-native';
import Header from './Component/Header';

export default function App() {
  return (
    <View>
      <Header/>
    </View>
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

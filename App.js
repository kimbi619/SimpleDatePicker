import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useEffect } from 'react';
import CustomDatePicker from './CustomDatePicker';

export default function App() {

  useEffect(() => {
    
  }, [])



  return (
    <View style={styles.container}>
      <CustomDatePicker />
      <StatusBar style="auto" />
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

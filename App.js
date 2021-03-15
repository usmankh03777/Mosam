import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
        <Text style={style}>Usman Khan wants to become Mobile Developer</Text>
        <StatusBar style="auto">Usman is doing very good in his field.</StatusBar>
    </View>
  );
}
const style= { color: 'white', fontSize: 34, paddingLeft: 20, }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'skyblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


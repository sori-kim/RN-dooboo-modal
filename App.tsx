import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ModalPage from './src/components/Modal/index';
// import ModalPickerPage from './src/components/NewModalPicker/index'; 


export default function App() {
  return (
    <View style={styles.container}>
      <ModalPage />
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

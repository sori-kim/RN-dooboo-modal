import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import ModalApp from './src/components/Modal/index';
// import Screen from './src/components/NewModal/index';
import ModalPage from './src/components/InhancedModal/index';

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

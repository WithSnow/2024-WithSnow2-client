// App.js
import React from 'react';
import {SafeAreaView} from 'react-native';
import styles from './src/styles/map/MapStyles';
import MapScreen from './src/screen/map/MapScreen';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <MapScreen />
    </SafeAreaView>
  );
};

export default App;

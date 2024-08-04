// App.js
import React from 'react';
import 'react-native-reanimated';
import 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native';
import styles from './src/styles/map/MapStyles';
import MapScreen from './src/screen/map/MapScreen';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <SafeAreaView style={styles.container}>
        <MapScreen />
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default App;

// App.js
import React from 'react';
import { SafeAreaView } from 'react-native';
import styles from './src/styles/map/MapStyles';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MapScreen from './src/screen/map/MapScreen';
import MyPageScreen from './src/screen/mypage/MyPageScreen';

const Stack = createStackNavigator();

//const App = () => {
function App() {
  return (
    /*<SafeAreaView style={styles.container}>
      <MyPageScreen />
    </SafeAreaView>*/
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Map">
        <Stack.Screen name="Map" component={MapScreen} />
        <Stack.Screen name="MyPage" component={MyPageScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

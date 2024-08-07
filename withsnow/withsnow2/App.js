import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-reanimated';
import 'react-native-gesture-handler';
import MapScreen from './src/screen/map/MapScreen';
import MyPageScreen from './src/screen/mypage/MyPageScreen';
import WelfareScreen from './src/screen/welfare/WelfareScreen';
import RecommendPlaceScreen from './src/screen/mypage/recommend/RecommendPlaceScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Map">
        <Stack.Screen name="Map" component={MapScreen} />
        <Stack.Screen name="RecommendPlace" component={RecommendPlaceScreen} />
        <Stack.Screen name="Welfare" component={WelfareScreen} />
        <Stack.Screen name="MyPage" component={MyPageScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

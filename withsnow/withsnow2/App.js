import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-reanimated';
import 'react-native-gesture-handler';
import MapScreen from './src/screen/map/MapScreen';
import MyPageScreen from './src/screen/mypage/MyPageScreen';
import WelfareScreen from './src/screen/welfare/WelfareScreen';
import FavoriteListScreen from './src/screen/favoriteList/FavoriteListScreen';
import RecommendPlaceScreen from './src/screen/mypage/recommend/RecommendPlaceScreen';
import { PlacesProvider } from './src/context/PlacesContext'; // Context 파일 import

const Stack = createStackNavigator();

function App() {
  return (
    <PlacesProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="탐색">
          <Stack.Screen name="탐색" component={MapScreen} />
          <Stack.Screen name="즐겨찾기" component={FavoriteListScreen} />
          <Stack.Screen name="복지사 호출" component={WelfareScreen} />
          <Stack.Screen name="마이페이지" component={MyPageScreen} />


          {/* 임시 */}
          <Stack.Screen
            name="RecommendPlace"
            component={RecommendPlaceScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PlacesProvider>
  );
}

export default App;

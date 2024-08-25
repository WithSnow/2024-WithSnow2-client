import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-reanimated';
import 'react-native-gesture-handler';
import MapScreen from './src/screen/map/MapScreen';
import MyPageScreen from './src/screen/mypage/MyPageScreen';
import WelfareScreen from './src/screen/welfare/WelfareScreen';
import FavoriteListScreen from './src/screen/favoriteList/FavoriteListScreen';
import RecommendPlaceScreen from './src/screen/mypage/recommend/RecommendPlaceScreen';
import MatchWelfare from './src/component/welfare/MatchWelfare';
import WelfareMessage from './src/component/welfare/WelfareMessage';
import MyPageDetailScreen from './src/screen/mypage/MyPageDetailScreen';
import {PlacesProvider} from './src/context/PlacesContext'; // Context 파일 import
import NavigationScreen from './src/screen/map/NavigationScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <PlacesProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="탐색">
          <Stack.Screen name="탐색" component={MapScreen} />
          <Stack.Screen name="즐겨찾기" component={FavoriteListScreen} />
          <Stack.Screen name="복지사 호출" component={WelfareScreen} />
          <Stack.Screen name="복지사 매칭" component={WelfareMessage} />
          <Stack.Screen name="복지사 배정" component={MatchWelfare} />
          <Stack.Screen name="마이페이지" component={MyPageScreen} />
          <Stack.Screen name="상세페이지" component={MyPageDetailScreen} />
          <Stack.Screen
            name="베프 추천 장소"
            component={RecommendPlaceScreen}
          />
          <Stack.Screen name="내비게이션" component={NavigationScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PlacesProvider>
  );
}

export default App;

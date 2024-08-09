import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import styles from '../../styles/map/MapStyles';
import UnderBar from '../../component/common/underBar/UnderBar';
import MyPageComponent from '../../component/mypage/MyPageComponent';
import {useFocusEffect} from '@react-navigation/native';

export default function MyPageScreen({navigation, route}) {
  const {activeTab: initialActiveTab = '마이페이지'} = route.params || {};
  const [activeTab, setActiveTab] = useState(initialActiveTab);

  useFocusEffect(
    React.useCallback(() => {
      if (route.params?.activeTab) {
        setActiveTab(route.params.activeTab);
      } else {
        setActiveTab('마이페이지');
      }
    }, [route.params?.activeTab]),
  );

  return (
    <View style={styles.container}>
      <MyPageComponent />

      <UnderBar activeTab={activeTab} setActiveTab={setActiveTab} />
    </View>
  );
}

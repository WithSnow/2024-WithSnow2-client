import React, {useState} from 'react';
import {View, Animated} from 'react-native';
import {useNavigation, useFocusEffect} from '@react-navigation/native';
import UnderBarTab from './UnderBarTab';
import styles from '../../../styles/common/UnderBarStyles';

export default function UnderBar({activeTab, setActiveTab}) {
  const navigation = useNavigation();

  const handleTabPress = tabName => {
    if (activeTab !== tabName) {
      navigation.navigate(tabName);
    }
  };

  // 포커스를 받을 때 activeTab 상태를 네비게이션 상태와 동기화
  useFocusEffect(
    React.useCallback(() => {
      setActiveTab(
        navigation.getState().routes[navigation.getState().index].name,
      );
    }, [navigation]),
  );

  return (
    <Animated.View style={styles.underBarContainer}>
      <UnderBarTab
        icon="map-outline"
        activeIcon="map"
        text="탐색"
        active={activeTab === '탐색'}
        onPress={() => handleTabPress('탐색')}
      />
      <UnderBarTab
        icon="heart-outline"
        activeIcon="heart"
        text="즐겨찾기"
        active={activeTab === '즐겨찾기'}
        onPress={() => handleTabPress('즐겨찾기')}
      />
      <UnderBarTab
        icon="call-outline"
        activeIcon="call"
        text="복지사 호출"
        active={activeTab === '복지사 호출'}
        onPress={() => handleTabPress('복지사 장소 전달')}
      />
      <UnderBarTab
        icon="person-outline"
        activeIcon="person"
        text="마이페이지"
        active={activeTab === '마이페이지'}
        onPress={() => handleTabPress('마이페이지')}
      />
    </Animated.View>
  );
}

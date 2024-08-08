import React from 'react';
import {View, Animated} from 'react-native';
import UnderBarTab from './UnderBarTab';
import styles from '../../../styles/common/UnderBarStyles';
import {useNavigation} from '@react-navigation/native';

export default function UnderBar({activeTab, setActiveTab}) {
  const navigation = useNavigation();

  const handleTabPress = tabName => {
    setActiveTab(tabName);
    if (tabName === '탐색') {
      navigation.navigate('Map', {activeTab: tabName});
    } else if (tabName === '마이페이지') {
      navigation.navigate('MyPage', {activeTab: tabName});
    } else if (tabName === '복지사 호출') {
      navigation.navigate('Welfare', {activeTab: tabName});
    }
    // 즐찾 추가해야함
  };

  return (
    <Animated.View style={styles.underBarContainer}>
      <UnderBarTab
        img={require('../../../../assets/images/underBar_map.png')}
        activeImg={require('../../../../assets/images/underBar_activemap.png')}
        text="탐색"
        active={activeTab === '탐색'}
        onPress={() => handleTabPress('탐색')}
      />
      <UnderBarTab
        img={require('../../../../assets/images/underBar_welfare.png')}
        activeImg={require('../../../../assets/images/underBar_activewelfare.png')}
        text="복지사 호출"
        active={activeTab === '복지사 호출'}
        onPress={() => handleTabPress('복지사 호출')}
      />
      <UnderBarTab
        img={require('../../../../assets/images/underBar_myPage.png')}
        activeImg={require('../../../../assets/images/underBar_activemyPage.png')}
        text="마이페이지"
        active={activeTab === '마이페이지'}
        onPress={() => handleTabPress('마이페이지')}
      />
    </Animated.View>
  );
}

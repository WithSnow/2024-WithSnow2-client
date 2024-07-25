import React, {useState} from 'react';
import {View} from 'react-native';
import UnderBarTab from './UnderBarTab';
import styles from '../../../styles/common/UnderBarStyles';

export default function UnderBar() {
  const [activeTab, setActiveTab] = useState('탐색');

  return (
    <View style={styles.underBarContainer}>
      <UnderBarTab
        img={require('../../../../assets/images/underBar_map.png')}
        activeImg={require('../../../../assets/images/underBar_activemap.png')}
        text="탐색"
        active={activeTab === '탐색'}
        onPress={() => setActiveTab('탐색')}
      />
      <UnderBarTab
        img={require('../../../../assets/images/underBar_welfare.png')}
        activeImg={require('../../../../assets/images/underBar_activewelfare.png')}
        text="복지사 호출"
        active={activeTab === '복지사 호출'}
        onPress={() => setActiveTab('복지사 호출')}
      />
      <UnderBarTab
        img={require('../../../../assets/images/underBar_myPage.png')}
        activeImg={require('../../../../assets/images/underBar_activemyPage.png')}
        text="마이페이지"
        active={activeTab === '마이페이지'}
        onPress={() => setActiveTab('마이페이지')}
      />
    </View>
  );
}

import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import RecommendPage_Header from '../../../component/mypage/recommendpage/RecommendPage_Header';
import RecommendPlace from '../../../component/mypage/recommendpage/RecommendPlace';
import places from '../../map/places';
import {useNavigation} from '@react-navigation/native';
import UnderBar from '../../../component/common/underBar/UnderBar';
import styles from '../../../styles/map/MapStyles';

export default function RecommendPlaceScreen({route}) {
  const {activeTab: initialActiveTab = '개인별 맞춤 장소 추천'} =
    route.params || {};
  const [activeTab, setActiveTab] = useState(initialActiveTab);

  useEffect(() => {
    if (route.params?.activeTab) {
      setActiveTab(route.params.activeTab);
    }
  }, [route.params?.activeTab]);

  const navigation = useNavigation();

  const handleClose = () => {
    navigation.navigate('Map');
  };

  return (
    <SafeAreaView style={styles.container}>
      <RecommendPage_Header username={'베리어프롬'} />
      <ScrollView>
        {places.map((place, index) => (
          <RecommendPlace key={index} place={place} onClose={handleClose} />
        ))}
      </ScrollView>
      <UnderBar activeTab={activeTab} setActiveTab={setActiveTab} />
    </SafeAreaView>
  );
}

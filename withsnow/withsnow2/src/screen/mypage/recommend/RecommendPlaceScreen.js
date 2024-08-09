import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import RecommendPage_Header from '../../../component/mypage/recommendpage/RecommendPage_Header';
import RecommendPlace from '../../../component/mypage/recommendpage/RecommendPlace';
import places from '../../map/places';
import {useNavigation} from '@react-navigation/native';
import UnderBar from '../../../component/common/underBar/UnderBar';
import styles from '../../../styles/map/MapStyles';

export default function RecommendPlaceScreen({route}) {
  const {activeTab: initialActiveTab = '마이페이지'} = route.params || {};
  const [activeTab, setActiveTab] = useState(initialActiveTab);

  useEffect(() => {
    if (route.params?.activeTab) {
      setActiveTab(route.params.activeTab);
    }
  }, [route.params?.activeTab]);

  const navigation = useNavigation();

  const handleClose = () => {
    navigation.navigate('탐색');
  };

  const filteredPlaces = places.filter(place => place.id >= 1 && place.id <= 4);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <RecommendPage_Header username={'베리어프롬'} />
        {filteredPlaces.map((place, index) => (
          <RecommendPlace
            key={index}
            place={place}
            onClose={handleClose}
            username={'베리어프롬'}
          />
        ))}
      </ScrollView>
      <UnderBar activeTab={activeTab} setActiveTab={setActiveTab} />
    </SafeAreaView>
  );
}

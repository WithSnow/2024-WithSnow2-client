import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import RecommendPage_Header from '../../../component/mypage/recommendpage/RecommendPage_Header';
import RecommendPlace from '../../../component/mypage/recommendpage/RecommendPlace';
import places from '../../map/places';
import UnderBar from '../../../component/common/underBar/UnderBar';
import styles from '../../../styles/map/MapStyles';

export default function RecommendPlaceScreen({navigation}) {
  const filteredPlaces = places.filter(place => place.id >= 1 && place.id <= 4);

  const handleClose = () => {
    navigation.goBack();
  };

  const [activeTab, setActiveTab] = React.useState('추천 장소');

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

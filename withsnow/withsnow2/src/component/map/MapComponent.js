import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import styles from '../../styles/map/MapStyles';

export default function MapComponent({
  navigation,
  onPlaceSelect,
  openFavoriteList,
}) {
  const mockPlace = {
    id: 4,
    name: '경복궁',
    address: '서울 종로구 세종로',
    rating: 4.0,
    phone: '987-654-3210',
    openTime: '10:00 AM - 8:00 PM',
    img: require('../../../assets/images/geongbok.png'),
    isFavorite: false,
    features: ['높은 턱 없음', '계단 없음', '휠체어 이용 가능', '경사로 있음'],
    floor: '1F',
  };

  const openRecommendPlace = () => {
    navigation.navigate('RecommendPlace');
  };

  return (
    <View style={styles.container}>
      <View style={styles.mapPlaceholder} />
      <TouchableOpacity
        onPress={() => onPlaceSelect(mockPlace)}
        style={styles.buttonOverlay}>
        <Text style={styles.buttonText}>placeDetail</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={openFavoriteList}
        style={[styles.buttonOverlay, {top: 200}]}>
        <Text style={styles.buttonText}>FavoriteList</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={openRecommendPlace} // 함수 연결
        style={[styles.buttonOverlay, {top: 280}]}>
        <Text style={styles.buttonText}>RecommendPlace</Text>
      </TouchableOpacity>
    </View>
  );
}

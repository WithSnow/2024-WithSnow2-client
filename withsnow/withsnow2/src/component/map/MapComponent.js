import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import styles from '../../styles/map/MapStyles';

export default function MapComponent({onPlaceSelect, openFavoriteList}) {
  const mockPlace = {
    id: 3,
    img: require('../../../assets/images/placeDetailImg.png'),
    name: '식민지역사박물관',
    address: '서울특별시 용산구 청파로47다길 27',
    phone: '02-2139-0427',
    rating: 4.6,
    openTime: '18:00 영업 종료',
    features: [
      '엘리베이터 있음',
      '높은 턱 없음',
      '휠체어 이용 가능 통로 있음',
      '경사로 있음',
    ],
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
    </View>
  );
}

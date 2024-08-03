import React from 'react';
import {Text, View} from 'react-native';
import styles from '../../styles/map/MapStyles';

export default function MapComponent({onPlaceSelect}) {
  const mockPlace = {
    imageUri: '이미지_주소',
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
    <View>
      <View style={styles.mapPlaceholder} />
      <Text onPress={() => onPlaceSelect(mockPlace)}>placeDetail</Text>
    </View>
  );
}

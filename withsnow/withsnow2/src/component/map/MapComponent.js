import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import styles from '../../styles/map/MapStyles';
import MapView from 'react-native-maps';

export default function MapComponent({navigation, onPlaceSelect}) {
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
      <MapView
        style={styles.mapPlaceholder}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
      <TouchableOpacity
        onPress={() => onPlaceSelect(mockPlace)}
        style={styles.buttonOverlay}>
        <Text style={styles.buttonText}>placeDetail</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={openRecommendPlace}
        style={[styles.buttonOverlay, {top: 280}]}>
        <Text style={styles.buttonText}>RecommendPlace</Text>
      </TouchableOpacity>
    </View>
  );
}

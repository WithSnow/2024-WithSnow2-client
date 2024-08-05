import React, {useState} from 'react';
import {SafeAreaView, View} from 'react-native';
import MapComponent from '../../component/map/MapComponent';
import SearchBar from '../../component/common/searchBar/SearchBar';
import Category from '../../component/common/category/Category';
import styles from '../../styles/map/MapStyles';
import UnderBar from '../../component/common/underBar/UnderBar';
import PlaceDetail from '../../component/map/placeDetail/PlaceDetail';
import FavoriteList from '../../component/map/FavoriteList/FavoriteList';

export default function MapScreen() {
  const [selectedPlaceId, setSelectedPlaceId] = useState(null);
  const [isFavoriteListVisible, setFavoriteListVisible] = useState(false);
  const [places, setPlaces] = useState([
    {
      id: 1,
      name: 'Place 1',
      address: 'Address 1',
      rating: 4.5,
      phone: '123-456-7890',
      openTime: '9:00 AM - 10:00 PM',
      img: require('../../../assets/images/placeDetailImg.png'),
      isFavorite: true,
    },
    {
      id: 2,
      name: 'Place 2',
      address: 'Address 2',
      rating: 4.0,
      phone: '987-654-3210',
      openTime: '10:00 AM - 8:00 PM',
      img: require('../../../assets/images/placeDetailImg.png'),
      isFavorite: true,
    },
    {
      id: 3,
      name: '식민지역사박물관',
      address: '서울특별시 용산구 청파로47다길 27',
      phone: '02-2139-0427',
      rating: 4.6,
      openTime: '18:00 영업 종료',
      img: require('../../../assets/images/placeDetailImg.png'),
      isFavorite: true,
      features: [
        '엘리베이터 있음',
        '높은 턱 없음',
        '휠체어 이용 가능 통로 있음',
        '경사로 있음',
      ],
    },
    {
      id: 4,
      name: 'Place 2',
      address: 'Address 2',
      rating: 4.0,
      phone: '987-654-3210',
      openTime: '10:00 AM - 8:00 PM',
      img: require('../../../assets/images/placeDetailImg.png'),
      isFavorite: true,
    },
    {
      id: 5,
      name: 'Place 2',
      address: 'Address 2',
      rating: 4.0,
      phone: '987-654-3210',
      openTime: '10:00 AM - 8:00 PM',
      img: require('../../../assets/images/placeDetailImg.png'),
      isFavorite: true,
    },
  ]);

  const handlePlaceSelect = place => {
    const selected = places.find(p => p.name === place.name);
    setSelectedPlaceId(selected.id);
  };

  const toggleFavorite = id => {
    setPlaces(prevPlaces => {
      const updatedPlaces = prevPlaces.map(place =>
        place.id === id ? {...place, isFavorite: !place.isFavorite} : place,
      );
      console.log('Updated Places: ', updatedPlaces);
      return updatedPlaces;
    });
  };

  const selectedPlace = places.find(place => place.id === selectedPlaceId);

  return (
    <View style={styles.container}>
      <MapComponent
        onPlaceSelect={handlePlaceSelect}
        openFavoriteList={() => setFavoriteListVisible(true)}
      />
      <SearchBar />
      <Category />
      {selectedPlace && (
        <PlaceDetail
          place={selectedPlace}
          setSelectedPlace={setSelectedPlaceId}
          toggleFavorite={toggleFavorite}
        />
      )}
      {isFavoriteListVisible && (
        <FavoriteList
          places={places}
          toggleFavorite={toggleFavorite}
          closeFavoriteList={() => setFavoriteListVisible(false)}
        />
      )}
      <SafeAreaView style={styles.underBarContainer}>
        <UnderBar />
      </SafeAreaView>
    </View>
  );
}

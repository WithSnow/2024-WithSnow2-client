import React, {useEffect, useState} from 'react';
import {SafeAreaView, View} from 'react-native';

import MapComponent from '../../component/map/MapComponent';
import SearchBar from '../../component/common/searchBar/SearchBar';
import Category from '../../component/common/category/Category';
import styles from '../../styles/map/MapStyles';
import UnderBar from '../../component/common/underBar/UnderBar';
import PlaceDetail from '../../component/map/placeDetail/PlaceDetail';
import FavoriteList from '../../component/map/FavoriteList/FavoriteList';
import RecommendPlace from '../../component/mypage/recommendpage/RecommendPlace';
import placesData from './places';
import RecommendPlaceScreen from '../mypage/recommend/RecommendPlaceScreen';

export default function MapScreen({navigation, route}) {
  const {activeTab: initialActiveTab = '탐색'} = route.params || {};
  const [activeTab, setActiveTab] = useState(initialActiveTab);
  const [selectedPlaceId, setSelectedPlaceId] = useState(null);
  const [isFavoriteListVisible, setFavoriteListVisible] = useState(false);
  const [isRecommendPlaceVisible, setRecommendPlaceVisible] = useState(false); // RecommendPlace state 추가
  const [places, setPlaces] = useState(placesData);

  const handlePlaceSelect = place => {
    const selected = places.find(p => p.name === place.name);
    if (selected) {
      setSelectedPlaceId(selected.id);
    }
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

  useEffect(() => {
    if (route.params?.activeTab) {
      setActiveTab(route.params.activeTab);
    }
  }, [route.params?.activeTab]);

  return (
    <SafeAreaView style={styles.container}>
      <MapComponent
        navigation={navigation}
        onPlaceSelect={handlePlaceSelect}
        openFavoriteList={() => setFavoriteListVisible(true)}
        openRecommendPlace={() => setRecommendPlaceVisible(true)} // RecommendPlace 함수 전달
      />

      <View style={styles.searchBarContainer}>
        <SearchBar />
      </View>

      <Category />

      <UnderBar activeTab={activeTab} setActiveTab={setActiveTab} />
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
      {isRecommendPlaceVisible && <RecommendPlaceScreen />}
    </SafeAreaView>
  );
}

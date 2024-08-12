import React, {useState, useEffect} from 'react';
import {SafeAreaView, View} from 'react-native';
import MapComponent from '../../component/map/MapComponent';
import SearchBar from '../../component/common/searchBar/SearchBar';
import Category from '../../component/common/category/Category';
import styles from '../../styles/map/MapStyles';
import UnderBar from '../../component/common/underBar/UnderBar';
import PlaceDetail from '../../component/map/placeDetail/PlaceDetail';
import FavoriteListScreen from '../favoriteList/FavoriteListScreen';
import {usePlacesContext} from '../../context/PlacesContext'; // Context 사용

export default function MapScreen({navigation, route}) {
  const {activeTab: initialActiveTab = '탐색'} = route.params || {};
  const [activeTab, setActiveTab] = useState(initialActiveTab);
  const [selectedPlaceId, setSelectedPlaceId] = useState(null);
  const [isFavoriteListVisible, setFavoriteListVisible] = useState(false);
  const [isRecommendPlaceVisible, setRecommendPlaceVisible] = useState(false);
  const {places, toggleFavorite} = usePlacesContext(); // Context에서 상태와 함수를 가져옴

  const handlePlaceSelect = place => {
    const selected = places.find(p => p.name === place.name);
    if (selected) {
      setSelectedPlaceId(selected.id);
    }
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
        openRecommendPlace={() => setRecommendPlaceVisible(true)}
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
      {isFavoriteListVisible && <FavoriteListScreen />}
      {isRecommendPlaceVisible && <RecommendPlaceScreen />}
    </SafeAreaView>
  );
}

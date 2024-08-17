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

  // 장소 선택
  const handlePlaceSelect = place => {
    // 장소의 이름으로 매칭 -> 선택되면 ID 저장
    const selected = places.find(p => p.name === place.name);
    if (selected) {
      setSelectedPlaceId(selected.id);
    }
  };

  useEffect(() => {
    if (route.params?.selectedPlace) {
      const selectedPlace = places.find(
        p => p.name === route.params.selectedPlace.name,
      );
      if (selectedPlace) {
        setSelectedPlaceId(selectedPlace.id);
      }
    }
  }, [route.params?.selectedPlace]);

  // 선택된 장소 객체를 찾음
  const selectedPlace = places.find(place => place.id === selectedPlaceId);

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

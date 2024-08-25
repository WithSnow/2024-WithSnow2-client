import React, {useState, useEffect} from 'react';
import {SafeAreaView, View, ScrollView} from 'react-native';
import MapComponent from '../../component/map/MapComponent';
import SearchBar from '../../component/common/searchBar/SearchBar';
import Category from '../../component/common/category/Category';
import CategoryCard from '../../component/common/category/CategoryCard';
import styles from '../../styles/map/MapStyles';
import UnderBar from '../../component/common/underBar/UnderBar';
import {usePlacesContext} from '../../context/PlacesContext';
import PlaceDetail from '../../component/map/placeDetail/PlaceDetail';

export default function MapScreen({navigation, route}) {
  const {activeTab: initialActiveTab = '탐색'} = route.params || {};
  const [activeTab, setActiveTab] = useState(initialActiveTab);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const {places} = usePlacesContext();

  // 장소 선택
  const handlePlaceSelect = place => {
    // 장소의 이름으로 매칭 -> 선택되면 ID 저장
    const selected = places.find(p => p.name === place.name);
    if (selected) {
      setSelectedPlace(selected);
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

  const handleCategorySelect = category => {
    if (selectedCategory === category) {
      setSelectedCategory(null); // 이미 선택된 카테고리를 다시 클릭하면 해제
    } else {
      setSelectedCategory(category);
    }
  };

  const filteredPlaces = selectedCategory
    ? places.filter(place => place.category === selectedCategory)
    : [];

  return (
    <SafeAreaView style={styles.container}>
      <MapComponent
        navigation={navigation}
        onPlaceSelect={handlePlaceSelect}
        places={filteredPlaces}
        openFavoriteList={() => setFavoriteListVisible(true)}
        openRecommendPlace={() => setRecommendPlaceVisible(true)}
      />
      <View style={styles.searchBarContainer}>
        <SearchBar />
      </View>

      <UnderBar activeTab={activeTab} setActiveTab={setActiveTab} />

      <Category
        selectedCategory={selectedCategory}
        onSelectCategory={handleCategorySelect}
      />
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.placeCardContainer}>
        {filteredPlaces.map(place => (
          <CategoryCard key={place.id} place={place} onPress={() => {}} />
        ))}
      </ScrollView>

      {selectedPlace && (
        <PlaceDetail
          place={selectedPlace}
          setSelectedPlace={setSelectedPlace}
          toggleFavorite={() => {
            // Implement toggle favorite logic
          }}
        />
      )}

      <UnderBar activeTab={activeTab} setActiveTab={setActiveTab} />
    </SafeAreaView>
  );
}

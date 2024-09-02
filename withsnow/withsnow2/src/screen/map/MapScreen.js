import React, {useState, useEffect, useMemo} from 'react';
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
  const [placeDetailVisible, setPlaceDetailVisible] = useState(false);
  const {places} = usePlacesContext();

  // 장소 선택
  const handlePlaceSelect = place => {
    const selected = places.find(p => p.name === place.name);
    if (selected) {
      setSelectedPlace(selected);
      setPlaceDetailVisible(true);
    } else {
      Alert.alert('Error', '선택된 장소를 찾을 수 없습니다.');
    }
  };

  useEffect(() => {
    if (route.params?.selectedPlace) {
      console.log(
        'Received selectedPlace in MapScreen:',
        route.params.selectedPlace,
      );
      setSelectedPlace(route.params.selectedPlace);
      setPlaceDetailVisible(true);
    }
  }, [route.params?.selectedPlace]);

  const handleCategorySelect = category => {
    if (selectedCategory === category) {
      setSelectedCategory(null); // 이미 선택된 카테고리를 다시 클릭하면 해제
    } else {
      setSelectedCategory(category);
    }
  };

  const filteredPlaces = useMemo(() => {
    return selectedCategory
      ? places.filter(place => place.category === selectedCategory)
      : [];
  }, [selectedCategory, places]);

  const placeCoordinate =
    placeDetailVisible && selectedPlace
      ? {
          longitude: selectedPlace.longitude,
          latitude: selectedPlace.latitude,
        }
      : null;
  return (
    <SafeAreaView style={styles.container}>
      <MapComponent navigation={navigation} coordinates={placeCoordinate} />

      <View style={styles.searchBarContainer}>
        <SearchBar />
      </View>

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
          navigation={navigation}
          selectedPlace={selectedPlace}
          setSelectedPlace={place => {
            setSelectedPlace(place);
            setPlaceDetailVisible(!!place);
          }}
          toggleFavorite={() => {
            // Implement toggle favorite logic
          }}
        />
      )}

      <UnderBar activeTab={activeTab} setActiveTab={setActiveTab} />
    </SafeAreaView>
  );
}

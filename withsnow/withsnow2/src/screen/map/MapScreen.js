import React, {useState} from 'react';
import {SafeAreaView, View} from 'react-native';
import MapComponent from '../../component/map/MapComponent';
import SearchBar from '../../component/common/searchBar/SearchBar';
import Category from '../../component/common/category/Category';
import styles from '../../styles/map/MapStyles';
import UnderBar from '../../component/common/underBar/UnderBar';
import PlaceDetail from '../../component/common/placeDetail/PlaceDetail';

export default function MapScreen() {
  const [selectedPlace, setSelectedPlace] = useState(null);

  const handlePlaceSelect = place => {
    setSelectedPlace(place);
  };

  return (
    <View style={styles.container}>
      <MapComponent onPlaceSelect={handlePlaceSelect} />
      <SearchBar />
      <Category />
      <PlaceDetail place={selectedPlace} setSelectedPlace={setSelectedPlace} />
      <SafeAreaView style={styles.underBarContainer}>
        <UnderBar />
      </SafeAreaView>
    </View>
  );
}

import React, { useEffect, useState } from 'react';
import {SafeAreaView, View} from 'react-native';

import MapComponent from '../../component/map/MapComponent';
import SearchBar from '../../component/common/searchBar/SearchBar';
import Category from '../../component/common/category/Category';
import styles from '../../styles/map/MapStyles';
import UnderBar from '../../component/common/underBar/UnderBar';
import PlaceDetail from '../../component/common/placeDetail/PlaceDetail';


export default function MapScreen({ navigation, route }) {
  const { activeTab: initialActiveTab = '탐색' } = route.params || {};
  const [activeTab, setActiveTab] = useState(initialActiveTab);
  const [selectedPlace, setSelectedPlace] = useState(null);

  const handlePlaceSelect = place => {
    setSelectedPlace(place);
  };

  useEffect(() => {
    if (route.params?.activeTab) {
      setActiveTab(route.params.activeTab);
    }
  }, [route.params?.activeTab]);

  return (
    <View style={styles.container}>
      <MapComponent onPlaceSelect={handlePlaceSelect} />
      <SearchBar />
      <TabBar />
      <UnderBar activeTab={activeTab} setActiveTab={setActiveTab} />
      <Category />
      <PlaceDetail place={selectedPlace} setSelectedPlace={setSelectedPlace} />
    </View>
  );
}
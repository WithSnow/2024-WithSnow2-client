import React from 'react';
import {View} from 'react-native';
import MapComponent from '../../component/map/MapComponent';
import SearchBar from '../../component/common/searchBar/SearchBar';
import TabBar from '../../component/common/category/Category';
import styles from '../../styles/map/MapStyles';
import UnderBar from '../../component/common/underBar/UnderBar';

export default function MapScreen() {
  return (
    <View style={styles.container}>
      <MapComponent />
      <SearchBar />
      <TabBar />
      <UnderBar />
    </View>
  );
}

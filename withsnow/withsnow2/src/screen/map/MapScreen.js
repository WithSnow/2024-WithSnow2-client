import React from 'react';
import {View} from 'react-native';
import MapComponent from '../../component/map/MapComponent';
import SearchBar from '../../component/common/searchbar/SearchBar';
import TabBar from '../../component/common/category/Category';
import styles from '../../component/common/styles';

export default function MapScreen() {
  return (
    <View style={styles.container}>
      <MapComponent />
      <SearchBar />
      <TabBar />
    </View>
  );
}

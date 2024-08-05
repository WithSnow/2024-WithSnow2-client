import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import MapComponent from '../../component/map/MapComponent';
import SearchBar from '../../component/common/searchBar/SearchBar';
import TabBar from '../../component/common/category/Category';
import styles from '../../styles/map/MapStyles';
import UnderBar from '../../component/common/underBar/UnderBar';

export default function MapScreen({ navigation, route }) {
  const { activeTab: initialActiveTab = '탐색' } = route.params || {};
  const [activeTab, setActiveTab] = useState(initialActiveTab);

  useEffect(() => {
    if (route.params?.activeTab) {
      setActiveTab(route.params.activeTab);
    }
  }, [route.params?.activeTab]);

  return (
    <View style={styles.container}>
      <MapComponent />
      <SearchBar />
      <TabBar />
      <UnderBar activeTab={activeTab} setActiveTab={setActiveTab} />
    </View>
  );
}
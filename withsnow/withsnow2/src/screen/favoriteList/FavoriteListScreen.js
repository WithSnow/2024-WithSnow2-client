import React, {useState, useCallback} from 'react';
import {View} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import FavoriteList from '../../component/FavoriteList/FavoriteList';
import UnderBar from '../../component/common/underBar/UnderBar';
import styles from '../../styles/map/MapStyles';
import {usePlacesContext} from '../../context/PlacesContext';

export default function FavoriteListScreen({route}) {
  const {activeTab: initialActiveTab = '즐겨찾기'} = route.params || {};
  const [activeTab, setActiveTab] = useState(initialActiveTab);
  const {places, toggleFavorite} = usePlacesContext();

  useFocusEffect(
    useCallback(() => {
      if (route.params?.activeTab) {
        setActiveTab(route.params.activeTab);
      } else {
        setActiveTab('즐겨찾기');
      }
    }, [route.params?.activeTab]),
  );

  return (
    <View style={styles.container}>
      <FavoriteList places={places} toggleFavorite={toggleFavorite} />
      <UnderBar activeTab={activeTab} setActiveTab={setActiveTab} />
    </View>
  );
}

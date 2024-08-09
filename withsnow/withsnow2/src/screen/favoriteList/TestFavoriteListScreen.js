import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import styles from '../../styles/map/MapStyles';
import UnderBar from '../../component/common/underBar/UnderBar';
import WelfareComponent from '../../component/welfare/WelfareComponent';
import FavoriteListComponent from '../../component/FavoriteList/FavoriteList';
import {useFocusEffect} from '@react-navigation/native';

export default function TestFavoriteListScreen({places, toggleFavorite}) {
  useEffect(() => {
    console.log('Test FavoriteListScreen places:', places);
    console.log('Test FavoriteListScreen toggleFavorite:', toggleFavorite);
  }, [places, toggleFavorite]);

  return (
    <View>
      <Text>Test Screen</Text>
      <Text>{JSON.stringify(places)}</Text>
    </View>
  );
}

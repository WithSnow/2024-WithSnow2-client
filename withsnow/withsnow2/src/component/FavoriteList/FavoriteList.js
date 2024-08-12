import React from 'react';
import {FlatList, Text, View, StyleSheet} from 'react-native';
import PlaceDescription from '../map/placeAddiction/PlaceDescription';
import styles from '../../styles/map/FavoriteListStyles';

export default function FavoriteList({places = [], toggleFavorite}) {
  // Default value for places
  const favoritePlaces = places.filter(place => place.isFavorite);

  return (
    <View style={styles.container}>
      <FlatList
        data={favoritePlaces}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <View style={styles.placeContainer}>
            <PlaceDescription
              place={item}
              toggleFavorite={() => toggleFavorite(item.id)}
            />
          </View>
        )}
        contentContainerStyle={styles.flatListContent}
        ListFooterComponent={
          <Text style={styles.lastText}>
            내가 가고 싶은 {'\n'} 더 많은 장소를 저장해 보세요!
          </Text>
        }
      />
    </View>
  );
}

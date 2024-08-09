import React from 'react';
import {FlatList, Text, View} from 'react-native';
import styles from '../../styles/map/FavoriteListStyles';
import PlaceDescription from '../map/placeAddiction/PlaceDescription';

export default function FavoriteList({places = [], toggleFavorite}) {
  // Default value for places
  const favoritePlaces = places.filter(place => place.isFavorite);

  return (
    <View style={styles.container}>
      {favoritePlaces.length > 0 ? (
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
        />
      ) : (
        <Text style={styles.noFavoritesText}>즐겨찾기가 없습니다.</Text>
      )}
    </View>
  );
}

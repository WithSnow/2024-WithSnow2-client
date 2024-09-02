import React from 'react';
import {FlatList, Text, View, StyleSheet} from 'react-native';
import styles from '../../styles/map/FavoriteListStyles';
import PlaceCard from '../map/placeAddiction/PlaceCard';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function FavoriteList({
  navigation,
  places = [],
  toggleFavorite,
}) {
  const favoritePlaces = places.filter(place => place.isFavorite);

  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={
          <View style={styles.recentButton}>
            <Text style={styles.recentText}>
              최신순
              <Icon name="keyboard-arrow-down" style={styles.recentIcon}></Icon>
            </Text>
          </View>
        }
        data={favoritePlaces}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <View style={styles.placeContainer}>
            <PlaceCard
              navigation={navigation}
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

import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from '../../../styles/map/CategoryCardStyles';
import {usePlacesContext} from '../../../context/PlacesContext';
import ActionButton from '../../map/placeAddiction/ActionButton';

export default function CategoryCard({place, onPress}) {
  const {toggleFavorite} = usePlacesContext();

  return (
    <View style={styles.card} onPress={() => onPress(place)}>
      <View style={styles.imageContainer}>
        <Image source={place.img} style={styles.image} />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{place.name}</Text>
        <Text style={styles.address}>{place.address}</Text>
        {/* <Text style={styles.rating}>
          {place.rating} <FontAwesome name="star" size={16} color="#f4c430" />
        </Text> */}
        <TouchableOpacity
          onPress={() => {
            toggleFavorite(place.id);
          }}
          style={styles.favoriteButton}>
          <FontAwesome
            name={place.isFavorite ? 'heart' : 'heart-o'}
            size={24}
            style={{color: place.isFavorite ? '#F9A596' : '#ADB0B0'}}
          />
        </TouchableOpacity>
        <View style={styles.actionContainer}>
          <ActionButton
            label="출발지"
            isStart={true}
            onPress={() => {
              /* 출발지 처리 로직 추가 */
            }}
          />
          <ActionButton
            label="도착지"
            isStart={false}
            onPress={() => {
              /* 도착지 처리 로직 추가 */
            }}
          />
        </View>
      </View>
    </View>
  );
}

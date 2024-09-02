import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from '../../../styles/map/CategoryCardStyles';
import {usePlacesContext} from '../../../context/PlacesContext';
import ActionButton from '../../map/placeAddiction/ActionButton';
import {useNavigation} from '@react-navigation/native';

export default function CategoryCard({place, onPress}) {
  const {toggleFavorite} = usePlacesContext();
  const navigation = useNavigation();

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
              navigation.navigate('내비게이션', {startPlace: place.name});
            }}
          />
          <ActionButton
            label="도착지"
            isStart={false}
            onPress={() => {
              navigation.navigate('내비게이션', {endPlace: place.name});
            }}
          />
        </View>
      </View>
    </View>
  );
}

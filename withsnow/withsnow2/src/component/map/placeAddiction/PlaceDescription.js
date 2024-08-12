import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import styles from '../../../styles/common/PlaceDescriptionStyles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function PlaceDescription({place, toggleFavorite}) {
  return (
    <View style={styles.detailsContainer}>
      <Image
        source={place.img}
        style={styles.image}
        onError={error => console.log(error.nativeEvent.error)}
      />
      <View style={styles.details}>
        <View style={styles.nameContainer}>
          <Text style={styles.name}>{place.name}</Text>
          <TouchableOpacity
            onPress={() => {
              console.log('Favorite button pressed'); // 확인 로그
              toggleFavorite(place.id);
            }}
            style={styles.favoriteButton}>
            <FontAwesome
              name={place.isFavorite ? 'heart' : 'heart-o'}
              size={24}
              style={{color: place.isFavorite ? '#F9A596' : '#ADB0B0'}}
            />
          </TouchableOpacity>
        </View>

        <Text style={styles.address}>{place.address}</Text>

        <Text style={styles.rating}>
          {place.rating} <FontAwesome name="star" size={16} color="#f4c430" />
        </Text>

        <Text style={styles.phone}>
          <Icon name="phone" size={16} color="#19BAFF" /> {place.phone}
        </Text>

        <Text style={styles.openTime}>
          <Icon name="access-time" size={16} /> {place.openTime}
        </Text>
      </View>
    </View>
  );
}

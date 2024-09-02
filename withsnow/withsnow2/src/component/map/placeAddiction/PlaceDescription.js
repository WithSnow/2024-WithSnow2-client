import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import styles from '../../../styles/common/PlaceDescriptionStyles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function PlaceDescription({place}) {
  const renderStars = rating => {
    const fullStar = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5 ? 1 : 0;
    const emptyStar = 5 - fullStar - halfStar;
    return (
      <View style={styles.starContainer}>
        {Array(fullStar)
          .fill()
          .map((_, index) => (
            <FontAwesome
              key={`full-${index}`}
              name="star"
              size={14}
              color="#FFD233"
            />
          ))}
        {halfStar === 1 && (
          <FontAwesome
            key="half-star"
            name="star-half-full"
            size={14}
            color="#FFD233"
          />
        )}
        {Array(emptyStar)
          .fill()
          .map((_, index) => (
            <FontAwesome
              key={`empty-${index}`}
              name="star-o"
              size={14}
              color="#ADB0B0"
            />
          ))}
      </View>
    );
  };
  return (
    <View style={styles.detailsContainer}>
      <Image
        source={require('../../../../assets/images/station.png')}
        style={styles.image}
        onError={error => console.log(error.nativeEvent.error)}
      />
      <View style={styles.details}>
        <View style={styles.nameContainer}>
          <Text style={styles.name}>{place.name}</Text>
          {/* <TouchableOpacity
            onPress={() => {
              toggleFavorite(place.id);
            }}
            style={styles.favoriteButton}>
            <FontAwesome
              name={place.isFavorite ? 'heart' : 'heart-o'}
              size={24}
              style={{color: place.isFavorite ? '#F9A596' : '#ADB0B0'}}
            />
          </TouchableOpacity> */}
        </View>

        <Text style={styles.address}>{place.address}</Text>

        <View style={styles.ratingContainer}>
          <Text style={styles.ratingText}>{place.rating}</Text>
          {renderStars(place.rating)}
        </View>

        <Text style={styles.phone_number}>
          <Icon name="phone" size={16} color="#19BAFF" /> {place.phone_number}
        </Text>

        <Text style={styles.openTime}>
          <Icon name="access-time" size={16} /> {place.opening_hours}
        </Text>
      </View>
    </View>
  );
}

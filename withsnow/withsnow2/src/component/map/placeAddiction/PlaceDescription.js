import React, {useState} from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import styles from '../../../styles/common/PlaceDescriptionStyles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function PlaceDescription({place}) {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <View style={styles.detailsContainer}>
      <Image
        source={require('../../../../assets/images/placeDetailImg.png')}
        style={styles.image}
        onError={error => console.log(error.nativeEvent.error)}
      />
      <View style={styles.details}>
        <View style={styles.nameContainer}>
          <Text style={styles.name}>{place.name}</Text>
          <TouchableOpacity
            onPress={toggleFavorite}
            style={styles.favoriteButton}>
            <FontAwesome
              name={isFavorite ? 'heart' : 'heart-o'}
              size={20}
              style={isFavorite ? styles.favoriteIcon : styles.nonFavoriteIcon}
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

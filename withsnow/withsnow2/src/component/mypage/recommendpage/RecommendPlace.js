import React from 'react';
import {Image, Text, View, TouchableOpacity} from 'react-native';
import styles from '../../../styles/mypage/RecommendPlaceStyles';
import Features from '../../map/placeAddiction/Features';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function RecommendPlace({place, onClose}) {
  return (
    <View style={styles.container}>
      <View style={styles.placeCard}>
        <Image source={place.img} style={styles.image} />
        <View style={styles.placeAddiction}>
          <Text style={styles.name}>{place.name}</Text>
          <Text style={styles.address} numberOfLines={2}>
            {place.address}
          </Text>
          {place.features && (
            <View style={styles.featuresContainer}>
              <Features
                features={place.features.slice(0, 1)}
                style={styles.featureplus}
              />
              <Features
                features={place.features.slice(1, 2)}
                style={styles.featureplus}
              />
            </View>
          )}
        </View>
      </View>
    </View>
  );
}

import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from '../../../styles/mypage/RecommendPlaceStyles';
import Features from '../../map/placeAddiction/Features';

export default function RecommendPlace({place}) {
  return (
    <View style={styles.container}>
      <View style={styles.placeCard}>
        <View style={styles.imageContainer}>
          <Image source={place.img} style={styles.image} />
        </View>
        <View style={styles.floorContainer}>
          {place.floor.map((floor, index) => (
            <View key={index} style={styles.floorBox}>
              <Text key={index} style={styles.floorText}>
                {floor}
              </Text>
            </View>
          ))}
        </View>
        <View style={styles.placeAddiction}>
          <Text style={styles.name}>{place.name}</Text>
          <Text style={styles.category}>{place.category}</Text>
          <Text style={styles.address} numberOfLines={2}>
            {place.address}
          </Text>
          {place.features && (
            <View style={styles.featuresContainer}>
              {place.features.slice(0, 2).map((feature, index) => (
                <Features
                  key={index}
                  features={[feature]}
                  style={styles.featureplus}
                />
              ))}
            </View>
          )}
        </View>
      </View>
    </View>
  );
}

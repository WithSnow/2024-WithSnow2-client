import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from '../../../styles/common/FeatureStyles';
import iconMap from '../placeDetail/IconMap';

export default function Features({features}) {
  return (
    <View style={styles.featureContainer}>
      {features.map((feature, index) => (
        <View key={index} style={styles.feature}>
          {iconMap[feature] ? (
            iconMap[feature]
          ) : (
            <Icon name="error-outline" size={20} color="#ADB0B0" />
          )}
          <Text style={styles.featureText}>{feature}</Text>
        </View>
      ))}
    </View>
  );
}

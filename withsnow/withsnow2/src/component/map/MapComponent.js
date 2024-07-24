import React from 'react';
import {View} from 'react-native';
import styles from '../common/styles';

export default function MapComponent() {
  return (
    <View style={styles.container}>
      <View style={styles.mapPlaceholder} />
    </View>
  );
}

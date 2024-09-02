import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import styles from '../../styles/map/MapStyles';
import MapView from 'react-native-maps';

export default function MapComponent({navigation}) {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.mapPlaceholder}
        initialRegion={{
          latitude: 37.546603,
          longitude: 126.964759,
          latitudeDelta: 0.1032,
          longitudeDelta: 0.0521,
        }}
      />

      {/* <View style={styles.mapPlaceholder} /> */}
    </View>
  );
}

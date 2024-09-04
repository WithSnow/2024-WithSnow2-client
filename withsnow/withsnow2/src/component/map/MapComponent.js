import React, {useEffect, useRef} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import styles from '../../styles/map/MapStyles';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';

export default function MapComponent({navigation, coordinates}) {
  // 지도 인스턴스에 접근(애니메이션 제어 용도)
  const mapRef = useRef(null);

  // coordinate 변경시 지도를 해당 좌표로 이동
  useEffect(() => {
    if (coordinates && mapRef.current) {
      mapRef.current.animateToRegion(
        {
          ...coordinates,
          // 줌 레벨
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        },
        // 애니메이션 시간
        1000,
      );
    }
  }, [coordinates]);
  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        provider={PROVIDER_GOOGLE}
        style={styles.mapPlaceholder}
        initialRegion={{
          latitude: 37.546603,
          longitude: 126.964759,
          latitudeDelta: 0.1032,
          longitudeDelta: 0.0521,
        }}>
        {/* {coordinates && <Marker coordinate={coordinates} />} */}
      </MapView>

      {/* <View style={styles.mapPlaceholder} /> */}
    </View>
  );
}

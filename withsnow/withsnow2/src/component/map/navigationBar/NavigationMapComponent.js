import React, {useEffect, useRef} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import styles from '../../../styles/map/MapStyles';
export default function NavigationMapComponent({startCoord}) {
  // 지도 인스턴스에 접근(애니메이션 제어 용도)
  const mapRef = useRef(null);

  const endCoord = {
    latitude: 37.5665, // 예시 위도
    longitude: 126.978, // 예시 경도
  };

  // coordinate 변경시 지도를 해당 좌표로 이동
  useEffect(() => {
    if (startCoord && mapRef.current) {
      mapRef.current.animateToRegion(
        {
          ...startCoord,
          // 줌 레벨
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        },
        // 애니메이션 시간
        1000,
      );
    }
  }, [startCoord]);

  return (
    <View style={{flex: 1}}>
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
        {/* {startCoord && <Marker coordinate={startCoord} />}
        {startCoord && <Marker coordinate={endCoord} />} */}
      </MapView>
    </View>
  );
}

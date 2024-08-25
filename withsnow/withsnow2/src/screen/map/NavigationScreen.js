import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import styles from '../../styles/map/MapStyles';
import UnderBar from '../../component/common/underBar/UnderBar';
import {useFocusEffect} from '@react-navigation/native';
import NavigationHeader from '../../component/map/navigationBar/NavigationHeader';
import MapComponent from '../../component/map/MapComponent';
import NavigationButton from '../../component/map/navigationBar/NavigationButton';

export default function NavigationScreen({navigation, route}) {
  const {activeTab: initialActiveTab = '탐색'} = route.params || {};
  const [activeTab, setActiveTab] = useState(initialActiveTab);

  useFocusEffect(
    React.useCallback(() => {
      if (route.params?.activeTab) {
        setActiveTab(route.params.activeTab);
      } else {
        setActiveTab('탐색');
      }
    }, [route.params?.activeTab]),
  );

  return (
    <View style={styles.container}>
      <NavigationHeader navigation={navigation} route={route} />
      <MapComponent />

      <NavigationButton />
    </View>
  );
}

import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import styles from '../../styles/map/MapStyles';
import UnderBar from '../../component/common/underBar/UnderBar';
import {useFocusEffect} from '@react-navigation/native';
import NavigationHeader from '../../component/map/navigationBar/NavigationHeader';
import MapComponent from '../../component/map/MapComponent';
import NavigationButton from '../../component/map/navigationBar/NavigationButton';
import BusNavigation from '../../component/map/navigationBar/BusNavigation';

export default function NavigationScreen({navigation, route}) {
  const {activeTab: initialActiveTab = '탐색'} = route.params || {};
  const [activeTab, setActiveTab] = useState(initialActiveTab);
  const [activeButton, setActiveButton] = useState(null);
  const [endDestination, setEndDestination] = useState('');
  const [activeBus, setActiveBus] = useState(false);
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
      <NavigationHeader
        navigation={navigation}
        route={route}
        activeButton={activeButton}
        setActiveButton={setActiveButton}
        setEndDestination={setEndDestination}
        setActiveBus={setActiveBus}
      />
      <MapComponent />

      {activeBus ? (
        <BusNavigation />
      ) : (
        <NavigationButton
          navigation={navigation}
          route={route}
          activeButton={activeButton}
          setActiveButton={setActiveButton}
          endDestination={endDestination}
        />
      )}
    </View>
  );
}
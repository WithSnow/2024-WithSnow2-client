import React, {useEffect, useState} from 'react';
import {Modal, TouchableOpacity, View, Text} from 'react-native';
import styles from '../../styles/map/NavigationScreenStyles';
import {useFocusEffect} from '@react-navigation/native';
import NavigationHeader from '../../component/map/navigationBar/NavigationHeader';
import MapComponent from '../../component/map/MapComponent';
import WelfarePlace from '../../component/welfare/WelfarePlace';
import WelfareNavigationHeader from '../../component/welfare/WelfareNavigationHeader';

export default function WelfarePlaceScreen({navigation, route}) {
  const {activeTab: initialActiveTab = '복지사 호출'} = route.params || {};
  const [activeTab, setActiveTab] = useState(initialActiveTab);
  const [activeButton, setActiveButton] = useState(null);
  const [endDestination, setEndDestination] = useState('');
  const [activeBus, setActiveBus] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  useFocusEffect(
    React.useCallback(() => {
      if (route.params?.activeTab) {
        setActiveTab(route.params.activeTab);
      } else {
        setActiveTab('복지사 호출');
      }
    }, [route.params?.activeTab]),
  );

  return (
    <View style={styles.container}>
      <WelfareNavigationHeader
        navigation={navigation}
        route={route}
        activeButton={activeButton}
        setActiveButton={setActiveButton}
        setEndDestination={setEndDestination}
        setActiveBus={setActiveBus}
      />
      <MapComponent />
      <WelfarePlace />
    </View>
  );
}

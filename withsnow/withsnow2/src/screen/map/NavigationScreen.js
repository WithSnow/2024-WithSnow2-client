import React, {useEffect, useState} from 'react';
import {Modal, TouchableOpacity, View, Text} from 'react-native';
import styles from '../../styles/map/NavigationScreenStyles';
import UnderBar from '../../component/common/underBar/UnderBar';
import {useFocusEffect} from '@react-navigation/native';
import NavigationHeader from '../../component/map/navigationBar/NavigationHeader';
import MapComponent from '../../component/map/MapComponent';
import NavigationButton from '../../component/map/navigationBar/NavigationButton';
import BusNavigation from '../../component/map/navigationBar/BusNavigation';
import SelectedCard from '../../component/map/navigationBar/SelectedCard';

export default function NavigationScreen({navigation, route}) {
  const {activeTab: initialActiveTab = '탐색'} = route.params || {};
  const [activeTab, setActiveTab] = useState(initialActiveTab);
  const [activeButton, setActiveButton] = useState(null);
  const [endDestination, setEndDestination] = useState('');
  const [activeBus, setActiveBus] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [startCoord, setStartCoord] = useState(null);

  useFocusEffect(
    React.useCallback(() => {
      if (route.params?.activeTab) {
        setActiveTab(route.params.activeTab);
      } else {
        setActiveTab('탐색');
      }
    }, [route.params?.activeTab]),
  );

  const closeModal = () => {
    setSelectedCard(null);
  };

  return (
    <View style={styles.container}>
      <NavigationHeader
        navigation={navigation}
        route={route}
        activeButton={activeButton}
        setActiveButton={setActiveButton}
        setEndDestination={setEndDestination}
        setActiveBus={setActiveBus}
        setStartCoord={setStartCoord}
        startCoord={startCoord}
      />
      <NavigationMapComponent startCoord={startCoord} />

      {activeBus ? (
        <BusNavigation
          setSelectedCard={setSelectedCard}
          setActiveBus={setActiveBus}
        />
      ) : (
        <NavigationButton
          navigation={navigation}
          route={route}
          activeButton={activeButton}
          setActiveButton={setActiveButton}
          endDestination={endDestination}
        />
      )}

      {selectedCard && (
        <SelectedCard
          roadType={selectedCard.roadType}
          time={selectedCard.time}
          segments={selectedCard.segments}
          busText={selectedCard.busText}
          walkText={selectedCard.walkText}
          startInfo={selectedCard.startInfo}
          buses={selectedCard.buses}
          plusInfo={selectedCard.plusInfo}
          onClose={closeModal}
        />
      )}
    </View>
  );
}

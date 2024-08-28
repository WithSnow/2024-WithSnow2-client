import React, {useEffect, useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import styles from '../../../styles/map/NavigationHeaderStyles';
import Icon from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

const NavigationButton = ({
  iconName,
  text,
  buttonType,
  activeButton,
  onPress,
}) => {
  const isActive = activeButton === buttonType;

  return (
    <TouchableOpacity
      style={[styles.normalButton, isActive && styles.activeButton]}
      onPress={() => onPress(buttonType)}>
      <FontAwesome
        name={iconName}
        style={[styles.normalIcon, isActive && styles.activeIcon]}
      />
      <Text style={[styles.normalText, isActive && styles.activeText]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

const NavigationHeader = ({
  navigation,
  route,
  activeButton,
  setActiveButton,
  setEndDestination,
  setActiveBus,
}) => {
  const {startPlace, endPlace} = route.params || {};
  const [start, setStart] = useState(startPlace || '');
  const [end, setEnd] = useState(endPlace || '');

  useEffect(() => {
    if (startPlace) setStart(startPlace);
    if (endPlace) setEnd(endPlace);
  }, [startPlace, endPlace]);

  useEffect(() => {
    setEndDestination(end);
  }, [end, setEndDestination]);

  const handleButtonPress = buttonType => {
    setActiveButton(buttonType);
    if (buttonType === 'bus') {
      setActiveBus(true);
    } else {
      setActiveBus(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.upperContainer}>
        <Ionicons name="swap-vertical" style={styles.swapIcon} />
        <View style={styles.placeSelect}>
          <TextInput
            style={styles.input}
            placeholder="출발지를 입력하세요"
            value={start}
            onChangeText={setStart}
          />
          <TextInput
            style={styles.input}
            placeholder="도착지를 입력하세요"
            value={end}
            onChangeText={setEnd}
          />
        </View>
        <Icon name="close-a" style={styles.closeIcon} />
      </View>

      <View style={styles.lowerContainer}>
        {/* 도보 버튼 */}
        <NavigationButton
          iconName="wheelchair-alt"
          text="도보"
          buttonType="walk"
          activeButton={activeButton}
          onPress={handleButtonPress}
        />

        {/* 대중교통 버튼 */}
        <NavigationButton
          iconName="bus"
          text="대중교통"
          buttonType="bus"
          activeButton={activeButton}
          onPress={handleButtonPress}
        />
      </View>
    </View>
  );
};

export default NavigationHeader;

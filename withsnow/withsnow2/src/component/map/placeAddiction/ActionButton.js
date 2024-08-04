import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from '../../../styles/common/ActionButtonStyles';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function ActionButton({label, isStart, onPress}) {
  return (
    <TouchableOpacity
      style={isStart ? styles.startButton : styles.endButton}
      onPress={onPress}>
      <Icon
        name="location-pin"
        size={20}
        color={isStart ? '#fff' : '#19BAFF'}
      />
      <Text style={isStart ? styles.startText : styles.endText}>{label}</Text>
    </TouchableOpacity>
  );
}

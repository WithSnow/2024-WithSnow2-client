import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from '../../../styles/common/UnderBarTabStyles';

export default function UnderBarTab({icon, activeIcon, text, active, onPress}) {
  return (
    <TouchableOpacity style={styles.tabContainer} onPress={onPress}>
      <Icon
        name={active ? activeIcon : icon}
        size={24}
        color={active ? '#F9A596' : '#ADB0B0'}
        style={styles.tabIcon}
      />
      <Text style={[styles.tabText, active && styles.activeText]}>{text}</Text>
    </TouchableOpacity>
  );
}

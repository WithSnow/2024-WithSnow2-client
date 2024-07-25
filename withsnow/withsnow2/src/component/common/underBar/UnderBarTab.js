import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from '../../../styles/common/UnderBarTabStyles';

export default function UnderBarTab({img, activeImg, text, active, onPress}) {
  return (
    <TouchableOpacity style={styles.tabContainer} onPress={onPress}>
      <Image source={active ? activeImg : img} style={styles.tabIcon} />
      <Text style={[styles.tabText, active && styles.activeText]}>{text}</Text>
    </TouchableOpacity>
  );
}

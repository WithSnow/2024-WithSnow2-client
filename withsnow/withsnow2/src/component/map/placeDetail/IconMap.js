import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const iconMap = {
  '엘리베이터 있음': (
    <MaterialCommunityIcons name="elevator" size={20} color="#F9A596" />
  ),
  '높은 턱 없음': (
    <MaterialCommunityIcons name="slope-uphill" size={20} color="#ADB0B0" />
  ),
  '휠체어 이용 가능 통로 있음': (
    <MaterialIcons name="accessible" size={20} color="#F9A596" />
  ),
  '경사로 있음': <MaterialIcons name="ramp-right" size={20} color="#F9A596" />,
  '계단 없음': (
    <MaterialCommunityIcons name="stairs-box" size={20} color="#F9A596" />
  ),
};

export default iconMap;

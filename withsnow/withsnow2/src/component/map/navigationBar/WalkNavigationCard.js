import React from 'react';
import {Image, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';
import styles from '../../../styles/map/WalkNavigationCardStyles';

export default function WalkNavigationCard({onClose}) {
  return (
    <View style={styles.container}>
      <Icon name="close-a" style={styles.closeIcon} />
      <Image
        source={require('../../../../assets/images/ramp.png')}
        style={styles.rampImg}
      />

      <Text style={styles.warning}>
        차도와 인도가 구별되지 않은 골목에{'\n'} 과속 방지턱이 설치 되어 있는
        {'\n'} 구간이 있습니다.
      </Text>
      <View style={styles.divider} />
      <Text style={styles.viewPositionText}>방지턱 위치 보기</Text>
    </View>
  );
}

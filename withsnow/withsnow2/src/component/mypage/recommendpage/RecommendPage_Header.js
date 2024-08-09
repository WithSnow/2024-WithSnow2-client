import React from 'react';
import styles from '../../../styles/mypage/RecommendHeaderStyles';
import {Text, View} from 'react-native';

export default function RecommendPage_Header({username}) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>전동 휠체어 사용 베프</Text>
        <Text style={styles.subtitle}>
          <Text style={styles.username}>{username}</Text>님을 위한 장소 추천
          리스트
        </Text>
      </View>
    </View>
  );
}

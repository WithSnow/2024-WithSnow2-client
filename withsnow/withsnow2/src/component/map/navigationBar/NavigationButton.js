import React, {useState} from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import styles from '../../../styles/map/NavigationButtonStyles';

export default function NavigationButton() {
  // 활성화된 버튼을 추적하기 위한 상태
  const [activeButton, setActiveButton] = useState(null);

  // 버튼이 눌렸을 때 호출되는 함수
  const handlePress = button => {
    setActiveButton(button);
  };

  return (
    <View style={styles.container}>
      <View style={styles.walkContainer}>
        {/* 안전한 길 버튼 */}
        <TouchableOpacity
          style={[
            styles.safeButton,
            activeButton === 'safe' && styles.activeSafeButton, // 활성화된 경우 스타일 추가
          ]}
          onPress={() => handlePress('safe')}>
          <Text
            style={
              activeButton === 'safe' ? styles.activeSafeText : styles.safeText
            }>
            <Text style={styles.plusInfo}>장애물 최소화{'\n'}</Text>
            <Text style={styles.road}>안전한 길{'\n'}</Text>
            <Text style={styles.distance}>
              176m{'                                '}
            </Text>
            <Text style={styles.time}>3분</Text>
          </Text>
        </TouchableOpacity>

        {/* 더 빠른 길 버튼 */}
        <TouchableOpacity
          style={[
            styles.fastButton,
            activeButton === 'fast' && styles.activeFastButton, // 활성화된 경우 스타일 추가
          ]}
          onPress={() => handlePress('fast')}>
          <Text
            style={
              activeButton === 'fast' ? styles.activeFastText : styles.fastText
            }>
            <Text style={styles.plusInfo}>방지턱 1개{'\n'}</Text>
            <Text style={styles.road}>더 빠른 길{'\n'}</Text>
            <Text style={styles.distance}>
              150m{'                                '}
            </Text>
            <Text style={styles.time}>2분</Text>
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.startButton}>
        <Text style={styles.startText}>길안내 시작</Text>
      </TouchableOpacity>
    </View>
  );
}

import React, {useState} from 'react';
import {TouchableOpacity, View, Text, Modal} from 'react-native';
import styles from '../../../styles/map/NavigationButtonStyles';
import WalkNavigationCard from './WalkNavigationCard';

const RouteButton = ({
  isActive,
  onPress,
  buttonStyle,
  activeButtonStyle,
  textStyle,
  activeTextStyle,
  plusInfo,
  road,
  distance,
  time,
}) => (
  <TouchableOpacity
    style={[buttonStyle, isActive && activeButtonStyle]} // 활성화 시 스타일 적용
    onPress={onPress}>
    <Text style={isActive ? activeTextStyle : textStyle}>
      <Text style={styles.plusInfo}>
        {plusInfo}
        {'\n'}
      </Text>
      <Text style={styles.road}>
        {road}
        {'\n'}
      </Text>
      <Text style={styles.distance}>
        {distance}
        {'                                '}
      </Text>
      <Text style={styles.time}>{time}</Text>
    </Text>
  </TouchableOpacity>
);

export default function NavigationButton({
  navigation,
  activeButton,
  setActiveButton,
}) {
  const [showWalkCard, setShowWalkCard] = useState(false);
  const [selectedRoute, setSelectedRoute] = useState('safe');

  const handleShowWalkCard = () => {
    if (activeButton === 'walk') {
      setShowWalkCard(true);
    } else if (activeButton === 'bus') {
      // 대중교통 선택 시 다른 화면으로
      // navigation.navigate('TransitScreen'); // 'TransitScreen'은 대중교통 화면으로 연결되는 스크린 이름입니다.
    }
  };

  const handleHideWalkCard = () => {
    setShowWalkCard(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.walkContainer}>
        {/* 안전한 길 버튼 */}
        <RouteButton
          isActive={selectedRoute === 'safe'}
          onPress={() => setSelectedRoute('safe')}
          buttonStyle={styles.safeButton}
          activeButtonStyle={styles.activeSafeButton}
          textStyle={styles.safeText}
          activeTextStyle={styles.activeSafeText}
          plusInfo="장애물 최소화"
          road="안전한 길"
          distance="176m"
          time="3분"
        />

        {/* 더 빠른 길 버튼 */}
        <RouteButton
          isActive={selectedRoute === 'fast'}
          onPress={() => setSelectedRoute('fast')}
          buttonStyle={styles.fastButton}
          activeButtonStyle={styles.activeFastButton}
          textStyle={styles.fastText}
          activeTextStyle={styles.activeFastText}
          plusInfo="방지턱 1개"
          road="더 짧은 길"
          distance="150m"
          time="2분"
        />
      </View>

      {/* 길 안내 시작 버튼 */}
      <TouchableOpacity style={styles.startButton} onPress={handleShowWalkCard}>
        <Text style={styles.startText}>길안내 시작</Text>
      </TouchableOpacity>

      <Modal
        visible={showWalkCard}
        transparent={true}
        animationType="slide"
        onRequestClose={handleHideWalkCard}>
        <View style={styles.modalContainer}>
          <TouchableOpacity
            style={styles.overlay}
            onPress={handleHideWalkCard}
          />
          <WalkNavigationCard onClose={handleHideWalkCard} />
        </View>
      </Modal>
    </View>
  );
}

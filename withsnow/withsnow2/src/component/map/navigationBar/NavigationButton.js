import React, {useState} from 'react';
import {TouchableOpacity, View, Text, Modal} from 'react-native';
import styles from '../../../styles/map/NavigationButtonStyles';
import WalkNavigationCard from './WalkNavigationCard';
import BusNavigation from './BusNavigation';

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
  showInfo,
}) => (
  <TouchableOpacity
    style={[buttonStyle, isActive && activeButtonStyle]}
    onPress={onPress}>
    {/* road는 항상 표시 */}
    {showInfo && (
      <Text style={isActive ? activeTextStyle : textStyle}>
        <Text style={styles.plusInfo}>{plusInfo}</Text>
      </Text>
    )}
    <Text style={isActive ? activeTextStyle : textStyle}>
      <Text style={styles.road}>{road}</Text>
    </Text>

    {showInfo && (
      <Text style={isActive ? activeTextStyle : textStyle}>
        <Text style={styles.distance}>
          {distance}
          {'                             '}
        </Text>
        <Text style={styles.time}>{time}</Text>
      </Text>
    )}
  </TouchableOpacity>
);

export default function NavigationButton({
  navigation,
  activeButton,
  setActiveButton,
  endDestination,
}) {
  const [showWalkCard, setShowWalkCard] = useState(false);
  const [selectedRoute, setSelectedRoute] = useState('null');

  const handleShowWalkCard = () => {
    if (activeButton === 'walk') {
      setShowWalkCard(true);
    }
  };

  const handleHideWalkCard = () => {
    setShowWalkCard(false);
  };

  const isDestination =
    endDestination === '숙명여대 후문 ' && activeButton === 'walk';

  return (
    <View style={styles.container}>
      {/* 안전한 길 버튼 */}

      <View style={styles.walkContainer}>
        <RouteButton
          isActive={selectedRoute === 'safe'}
          onPress={() => setSelectedRoute('safe')}
          buttonStyle={styles.safeButton}
          activeButtonStyle={styles.activeSafeButton}
          textStyle={styles.safeText}
          activeTextStyle={styles.activeSafeText}
          plusInfo="횡단보도 1회   경사로 1회"
          road="안전한 길"
          distance="866m"
          time="16분"
          showInfo={isDestination}
        />

        {/* 더 빠른 길 버튼 */}
        <RouteButton
          isActive={selectedRoute === 'fast'}
          onPress={() => setSelectedRoute('fast')}
          buttonStyle={styles.fastButton}
          activeButtonStyle={styles.activeFastButton}
          textStyle={styles.fastText}
          activeTextStyle={styles.activeFastText}
          plusInfo="계단 1회   경사로 1회"
          road="더 짧은 길"
          distance="845m"
          time="12분"
          showInfo={isDestination}
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

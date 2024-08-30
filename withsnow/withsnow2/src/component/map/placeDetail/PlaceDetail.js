import React from 'react';
import {View} from 'react-native';
import {PanGestureHandler} from 'react-native-gesture-handler';
import Animated, {
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import PlaceDescription from '../placeAddiction/PlaceDescription';
import ActionButton from '../placeAddiction/ActionButton';
import Features from '../placeAddiction/Features';
import styles from '../../../styles/common/PlaceDetailStyles';

const mapFeature = features => {
  const featureMapping = {
    elevator: '엘레베이터 있음',
    step_free: '계단 없음',
    wheelchair_accessible: '휠체어 이용 가능 통로 있음',
    ramp: '경사로 있음',
  };

  return Object.keys(features)
    .filter(key => features[key])
    .map(key => featureMapping[key]);
};

const PlaceDetail = ({route, setSelectedPlace, threshold = 100}) => {
  const {selectedPlace} = route.params || {};
  console.log('Selected Place:', selectedPlace);

  if (!selectedPlace) {
    console.error('No selected place found');
    return null; // 데이터를 받지 못하면 팝업을 띄우지 않음
  }

  const translateY = useSharedValue(0);

  const gestureHandler = useAnimatedGestureHandler({
    onActive: event => {
      translateY.value = event.translationY;
    },
    onEnd: event => {
      if (event.translationY > threshold) {
        runOnJS(setSelectedPlace)(null);
      } else {
        translateY.value = withSpring(0, {
          damping: 20,
          stiffness: 90,
          mass: 1,
          overshootClamping: true,
          restDisplacementThreshold: 0.01,
          restSpeedThreshold: 0.01,
        });
      }
    },
  });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateY: translateY.value}],
    };
  });

  const setFeatures = selectedPlace.features
    ? mapFeature(selectedPlace.features)
    : [];

  return (
    <PanGestureHandler onGestureEvent={gestureHandler}>
      <Animated.View style={[styles.container, animatedStyle]}>
        <View style={styles.handle} />
        <PlaceDescription
          place={selectedPlace}
          // toggleFavorite={toggleFavorite}
        />
        <View style={styles.actionContainer}>
          <ActionButton
            label="출발지"
            isStart={true}
            onPress={() => {
              /* 출발지 처리 로직 추가 */
            }}
          />
          <ActionButton
            label="도착지"
            isStart={false}
            onPress={() => {
              /* 도착지 처리 로직 추가 */
            }}
          />
        </View>
        <Features features={setFeatures} />
      </Animated.View>
    </PanGestureHandler>
  );
};

export default PlaceDetail;

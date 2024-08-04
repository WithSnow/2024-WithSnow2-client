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

const PlaceDetail = ({place, setSelectedPlace}) => {
  if (!place) return null;

  const translateY = useSharedValue(0);

  const gestureHandler = useAnimatedGestureHandler({
    onActive: event => {
      translateY.value = event.translationY;
    },
    onEnd: event => {
      if (event.translationY > 100) {
        runOnJS(setSelectedPlace)(null);
      } else {
        translateY.value = withSpring(0, {
          damping: 100,
          stiffness: 70,
          mass: 10,
          overshootClamping: false,
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

  return (
    <PanGestureHandler onGestureEvent={gestureHandler}>
      <Animated.View style={[styles.container, animatedStyle]}>
        <PlaceDescription place={place} />
        <View style={styles.actionContainer}>
          <ActionButton label="출발지" isStart={true} onPress={() => {}} />
          <ActionButton label="도착지" isStart={false} onPress={() => {}} />
        </View>
        <Features features={place.features} />
      </Animated.View>
    </PanGestureHandler>
  );
};

export default PlaceDetail;

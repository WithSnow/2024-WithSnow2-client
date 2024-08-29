import React, {useState} from 'react';
import Animated, {
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import {PanGestureHandler} from 'react-native-gesture-handler';
import {TouchableOpacity, Text, View} from 'react-native';
import {DirectionCard} from './BusComponent'; // 공통 컴포넌트 임포트
import styles from '../../../styles/map/SelectedCardStyles';

export default function SelectedCard({
  roadType,
  time,
  segments,
  busText,
  walkText,
  startInfo = {},
  buses = [],
  plusInfo,
  onClose,
}) {
  const translateY = useSharedValue(0);

  const gestureHandler = useAnimatedGestureHandler({
    onActive: event => {
      translateY.value = event.translationY;
    },
    onEnd: event => {
      if (event.translationY > 100) {
        runOnJS(onClose)();
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

  return (
    <PanGestureHandler onGestureEvent={gestureHandler}>
      <Animated.View style={[styles.container, animatedStyle]}>
        <View style={styles.handle} />
        <DirectionCard
          roadType={roadType}
          time={time}
          segments={segments}
          busText={busText}
          walkText={walkText}
          startInfo={startInfo}
          buses={buses}
          plusInfo={plusInfo}
          disableShadow={true}
        />
      </Animated.View>
    </PanGestureHandler>
  );
}

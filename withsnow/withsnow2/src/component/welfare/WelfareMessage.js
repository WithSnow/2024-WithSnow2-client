import React from 'react';
import Animated, {
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import {PanGestureHandler} from 'react-native-gesture-handler';
import {Image, View, Text, TouchableOpacity} from 'react-native';
import styles from '../../styles/welfare/WelfareMessageStyles';
import Icon from 'react-native-vector-icons/Fontisto';

export default function WelfareMessage({welfareList, onClose}) {
  const translateY = useSharedValue(0);

  const gestureHandler = useAnimatedGestureHandler({
    onActive: event => {
      translateY.value = event.translationY;
    },
    onEnd: event => {
      if (event.translationY > 100) {
        runOnJS(onClose)(); // 팝업을 닫는 함수 호출
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

  const firstWelfare = welfareList[0];
  const secondWelfare = welfareList[1];
  const extraCount = welfareList.length - 2;

  return (
    <PanGestureHandler onGestureEvent={gestureHandler}>
      <Animated.View style={[styles.container, animatedStyle]}>
        <View style={styles.handle} />

        <View style={styles.imageContainer}>
          {firstWelfare?.img && (
            <Image source={firstWelfare.img} style={styles.image} />
          )}
        </View>

        <View style={styles.welfareItem}>
          <Text style={styles.boldName}>{firstWelfare?.name}</Text>
          <Text style={styles.welfareText}> 복지사님,</Text>
        </View>

        {secondWelfare && (
          <View style={styles.welfareItem}>
            <Image
              source={require('../../../assets/images/WelfareExtra.png')}
              style={styles.extraImage}
            />
            <Text style={styles.boldName}>{secondWelfare?.name}</Text>
            <Text style={styles.welfareText}>
              {' '}
              복지사님
              {extraCount > 0 && ` 외 ${extraCount}명`}
            </Text>
          </View>
        )}

        <Text style={styles.callText}>에게 호출을 보냅니다.</Text>

        <TouchableOpacity style={styles.messageButton}>
          <Text style={styles.messageText}>이동에 도움이 필요해요!</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.messageButton}>
          <Text style={styles.messageText}>
            휠체어를 끌어주실 분이 필요해요!
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.messageButton}>
          <Text style={styles.messageText}>길을 안내해 주세요!</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.writeButton}>
          <Text style={styles.writeText}>직접 입력...</Text>
          <Icon name="paper-plane" style={styles.writeIcon} />
        </TouchableOpacity>
      </Animated.View>
    </PanGestureHandler>
  );
}

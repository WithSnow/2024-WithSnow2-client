import React, {useState} from 'react';
import Animated, {
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import {PanGestureHandler} from 'react-native-gesture-handler';
import {Image, View, Text, TouchableOpacity, Alert} from 'react-native';
import styles from '../../styles/welfare/WelfareMessageStyles';
import Icon from 'react-native-vector-icons/Fontisto';
import CustomAlert from './CustomAlert';

export default function WelfareMessage({welfareList, onClose, navigation}) {
  const [modalVisible, setModalVisible] = useState(false);

  // 팝업 애니메이션 커스텀
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

  // 1, 2번째 복지사 저장, 그 외 복지사 수 저장
  const firstWelfare = welfareList[0];
  const secondWelfare = welfareList[1];
  const extraCount = welfareList.length - 2;

  // 메시지 선택 시 alert 메시지 커스텀
  const openModal = () => {
    setModalVisible(true);
  };
  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <PanGestureHandler onGestureEvent={gestureHandler}>
      <Animated.View style={[styles.container, animatedStyle]}>
        <View style={styles.handle} />

        <View style={styles.imageContainer}>
          {firstWelfare?.img && (
            <Image
              source={require('../../../assets/images/profile.png')}
              style={styles.image}
            />
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

        <TouchableOpacity
          style={styles.messageButton}
          onPress={() => openModal()}>
          <Text style={styles.messageText}>이동에 도움이 필요해요!</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.messageButton}
          onPress={() => openModal()}>
          <Text style={styles.messageText}>
            휠체어를 끌어주실 분이 필요해요!
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.messageButton}
          onPress={() => openModal()}>
          <Text style={styles.messageText}>길을 안내해 주세요!</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.writeButton}>
          <Text style={styles.writeText}>직접 입력...</Text>
          <Icon name="paper-plane" style={styles.writeIcon} />
        </TouchableOpacity>

        {/* customAlert 조건부 렌더링 */}
        {modalVisible && (
          <CustomAlert
            setModalVisible={setModalVisible}
            navigation={navigation}
            welfareList={welfareList}
          />
        )}
      </Animated.View>
    </PanGestureHandler>
  );
}

import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from '../../styles/mypage/MyPageStyles';

export default function MyPageComponent({username}) {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.middleButtons}>
        <TouchableOpacity style={styles.topButton}>
          <Image
            source={require('../../../assets/images/profile.png')}
            style={styles.myImage}
            resizeMode="contain"
          />
          <Text style={styles.myText}>전동 휠체어 사용 베프</Text>
          <Text style={styles.myText}>
            <Image
              source={require('../../../assets/images/premium.png')}
              style={styles.premiumImage}
              resizeMode="contain"
            />
            <Text style={styles.username}>{username}</Text>님
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('상세페이지')}>
          <Text style={styles.buttonText}>내 정보</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>설정</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('베프 추천 장소')}>
          <Text style={styles.aiText}>AI</Text>
          <Text style={styles.buttonText}>개인별 맞춤 장소 추천</Text>
          <Text style={styles.premiumText}>PREMIUM</Text>
          <Image
            source={require('../../../assets/images/premium.png')}
            style={styles.premiumImage}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>1:1 문의하기</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomButton}>
        <TouchableOpacity style={styles.premiumButton}>
          <Text style={styles.premiumbButtonText}>프리미엄 구독 사용 중</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Animated,
  Image,
  Text,
  Button,
  TouchableOpacity,
  TouchableHighlight,
  ScrollView,
} from 'react-native';
import styles from '../../styles/mypage/MyPageDetailStyles';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function MyPageDetailComponent({username}) {
  // 활성 탭 상태 관리
  const [activeTab, setActiveTab] = useState(0);

  // 탭 스타일 동적 변경을 위한 스타일
  const getTabStyle = index => ({
    ...styles.bottomUserButton,
    borderColor: activeTab === index ? '#F9A596' : '#ADB0B0', // 동적 테두리 색 변경
    borderWidth: 1, // 테두리 적용
  });

  return (
    <View style={styles.container}>
      <View style={styles.topProfileButton}>
        <View style={styles.profileNameText}>
          <Image
            source={require('../../../assets/images/profile.png')}
            style={styles.myImage}
            resizeMode="contain"
          />
          <View style={styles.usernameContainer}>
            <Text style={styles.myText}>전동 휠체어 사용 베프</Text>
            <Text style={styles.myText}>
              <Image
                source={require('../../../assets/images/premium.png')}
                style={styles.premiumImage}
                resizeMode="contain"
              />
              <Text style={styles.usernameText}>{username}</Text>님
            </Text>
          </View>
        </View>
        <View style={styles.profileButton}>
          <View style={styles.profileCategoryButton}>
            <Text style={styles.profileCategoryButtonText}>이름</Text>
          </View>
          <Text style={styles.profileText}>김숙명</Text>
        </View>
        <View style={styles.profileButton}>
          <View style={styles.profileCategoryButton}>
            <Text style={styles.profileCategoryButtonText}>생년월일</Text>
          </View>
          <Text style={styles.profileText}>20xx년 x월 x일</Text>
        </View>
        <View style={styles.profileButton}>
          <View style={styles.profileCategoryButton}>
            <Text style={styles.profileCategoryButtonText}>성별</Text>
          </View>
          <Text style={styles.profileText}>여성</Text>
        </View>
        <View style={styles.profileButton}>
          <View style={styles.profileCategoryButton}>
            <Text style={styles.profileCategoryButtonText}>휴대폰</Text>
          </View>
          <Text style={styles.profileText}>010-1234-5678</Text>
        </View>
        <View style={styles.profileButton}>
          <View style={styles.profileCategoryButton}>
            <Text style={styles.profileCategoryButtonText}>주소</Text>
          </View>
          <Text style={styles.profileText}>서울특별시 용산구 청파동 2가</Text>
        </View>
        <TouchableOpacity style={styles.profileEditButton}>
          <Text style={styles.profileEditButtonText}>프로필 수정하기</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomContainer}>
        {/* 첫 번째 탭 */}
        <TouchableOpacity
          style={getTabStyle(0)}
          onPress={() => setActiveTab(0)}>
          <Image
            source={require('../../../assets/images/boy_sitting_wheelchair.png')}
            style={styles.selectionImageImage}
          />
          <View style={styles.profileCategoryButton}>
            <Text style={styles.profileText}>
              전동
              <Icon name="keyboard-arrow-down" style={styles.recentIcon}></Icon>
            </Text>
          </View>
          <Text style={styles.selectionText}>휠체어 사용자입니다</Text>
        </TouchableOpacity>

        {/* 두 번째 탭 */}
        <TouchableOpacity
          style={getTabStyle(1)}
          onPress={() => setActiveTab(1)}>
          <Image
            source={require('../../../assets/images/couple_with_baby.png')}
            style={styles.selectionImageImage}
          />
          <Text style={styles.selectionText}>유아차 사용자입니다</Text>
        </TouchableOpacity>

        {/* 세 번째 탭 */}
        <TouchableOpacity
          style={getTabStyle(2)}
          onPress={() => setActiveTab(2)}>
          <Image
            source={require('../../../assets/images/wheelchair_with_girl.png')}
            style={styles.selectionImageImage}
          />
          <Text style={styles.selectionText}>휠체어 사용자 동행인입니다</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

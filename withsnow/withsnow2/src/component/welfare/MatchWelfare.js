import React, {useState, useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import styles from '../../styles/welfare/MatchWelfareStyles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

export default function MatchWelfare({route}) {
  const {welfareList} = route.params;
  const [assignedWelfare, setAssignedWelfare] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    if (welfareList && welfareList.length > 0) {
      const randomIndex = Math.floor(Math.random() * welfareList.length);
      setAssignedWelfare(welfareList[randomIndex]);
    }
  }, [welfareList]);

  const handleCancle = () => {
    navigation.navigate('탐색');
  };
  return (
    <View style={styles.container}>
      {assignedWelfare ? (
        <>
          <View style={styles.imageContainer}>
            <Image
              source={require('../../../assets/images/profile.png')}
              style={styles.image}
            />
            <View style={styles.divider} />

            <Text style={styles.welfareInfo}>
              {' '}
              {assignedWelfare.place} 소속 {'\n'} {assignedWelfare.name} 복지사
              입니다~!
            </Text>
          </View>

          <View style={styles.tagContainer}>
            {assignedWelfare.tags.map((tag, index) => (
              <View key={index} style={styles.tag}>
                <Text style={styles.tagText}>{tag}</Text>
              </View>
            ))}
          </View>

          <View style={styles.textContainer}>
            <Text style={styles.matchText}>호출 복지사님 중{'\n'}</Text>
            <View style={styles.matchTextContainer}>
              <Text style={styles.welfareName}>{assignedWelfare.name}</Text>
              <Text style={styles.matchText}> 복지사님과</Text>
            </View>
            <Text style={styles.matchText}>매칭되었습니다.</Text>
          </View>

          <TouchableOpacity
            style={styles.cancleButton}
            onPress={() => handleCancle()}>
            <Text style={styles.cancleText}>매칭 취소하기</Text>
          </TouchableOpacity>
        </>
      ) : (
        <Text>복지사 배정 중...</Text>
      )}
    </View>
  );
}

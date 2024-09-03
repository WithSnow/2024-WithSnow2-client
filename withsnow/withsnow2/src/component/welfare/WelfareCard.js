import React, {useContext} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from '../../styles/welfare/WelfareCardStyles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {WelfareContext} from '../../context/WelfareContext';
import Ionicons from 'react-native-vector-icons/Ionicons';

const WelfareCard = ({welfare}) => {
  const {welfareList, setWelfareList} = useContext(WelfareContext);

  const addWelfare = welfare => {
    setWelfareList(prevList =>
      prevList.some(item => item.id === welfare.id)
        ? prevList.filter(item => item.id !== welfare.id)
        : [...prevList, welfare],
    );
  };

  const isAdded = welfareList.some(item => item.id === welfare.id);

  return (
    <View style={styles.container}>
      <View style={styles.upperContainer}>
        {/* 복지사 프로필 이미지 */}
        <View style={styles.profileContainer}>
          {/* <Image source={welfare.img} style={styles.image} /> */}
          <View style={styles.imageContainer}>
            <Ionicons name="person" style={styles.image} />
          </View>
          {/* 복지사 이름 */}
          <Text style={styles.name}>{welfare.name} 복지사님</Text>
        </View>

        {/* 복지사 체크리스트 */}
        <TouchableOpacity
          style={[styles.checkBox, isAdded && styles.activeCheckBox]}
          onPress={() => addWelfare(welfare)}>
          <AntDesign name="check" style={styles.checkBoxIcon} />
        </TouchableOpacity>
      </View>

      {/* 복지사 태그 */}
      <View style={styles.tagContainer}>
        {welfare.tags.map((tag, index) => (
          <View key={index} style={styles.tag}>
            <Text style={styles.tagText}>{tag}</Text>
          </View>
        ))}
      </View>

      {/* 구분선 */}
      <View style={styles.divider} />

      <View style={styles.underContainer}>
        {/* 복지사 장소 */}
        <Text style={styles.place}>{welfare.place}</Text>

        {/* 복지사 거리 */}
        <Text style={styles.distance}>{welfare.distance}</Text>
      </View>
    </View>
  );
};

export default WelfareCard;

import React, {useState, memo} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from '../../styles/welfare/WelfareCardStyles';
import AntDesign from 'react-native-vector-icons/AntDesign';

const WelfareCard = memo(({welfare}) => {
  const [welfareList, setWelfareList] = useState([]);

  const addWelfare = welfare => {
    setWelfareList(prevList => [...prevList, welfare]);
  };

  return (
    <View>
      {/* 복지사 프로필 이미지 */}
      <Image source={welfare.img} style={styles.image} />

      {/* 복지사 이름 */}
      <Text style={styles.name}>{welfare.name} 복지사님</Text>

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

      {/* 복지사 장소 */}
      <Text style={styles.place}>{welfare.place}</Text>

      {/* 구분선 */}
      <View style={styles.placeDivider} />

      {/* 복지사 거리 */}
      <Text style={styles.distance}>{welfare.distance}</Text>

      {/* 복지사 체크리스트 */}
      <TouchableOpacity
        style={styles.checkBox}
        onPress={() => addWelfare(welfare)}>
        <AntDesign name="check" style={styles.checkBoxIcon} />
      </TouchableOpacity>
    </View>
  );
});

export default WelfareCard;

import React, {useEffect, useState} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import styles from '../../../styles/map/NavigationHeaderStyles';
import Icon from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

const NavigationHeader = ({navigation, route}) => {
  const {startPlace, endPlace} = route.params || {};
  const [start, setStart] = useState(startPlace || '');
  const [end, setEnd] = useState(endPlace || '');

  useEffect(() => {
    if (startPlace) {
      setStart(startPlace);
    }
    if (endPlace) {
      setEnd(endPlace);
    }
  }, [startPlace, endPlace]);

  return (
    <View style={styles.container}>
      <View style={styles.upperContainer}>
        <Ionicons name="swap-vertical" style={styles.swapIcon} />
        <View style={styles.placeSelect}>
          <TextInput
            style={styles.input}
            placeholder="출발지를 입력하세요"
            value={start}
            onChangeText={setStart}
          />

          <TextInput
            style={styles.input}
            placeholder="도착지를 입력하세요"
            value={end}
            onChangeText={setEnd}
          />
        </View>
        <Icon name="close-a" style={styles.closeIcon} />
      </View>

      <View style={styles.lowerContainer}>
        <View
          style={styles.walkButton}
          onPress={() => {
            /* 경로 탐색 로직 */
          }}>
          <FontAwesome name="wheelchair-alt" style={styles.wheelchairIcon} />
          <Text style={styles.walkText}>도보</Text>
        </View>
        <View
          style={styles.busButton}
          onPress={() => {
            /* 경로 탐색 로직 */
          }}>
          <FontAwesome name="bus" style={styles.busIcon} />
          <Text style={styles.busText}>대중교통</Text>
        </View>
      </View>
    </View>
  );
};

export default NavigationHeader;

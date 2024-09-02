import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from '../../styles/welfare/WelfarePlaceStyles';

export default function WelfarePlace() {
  const navigation = useNavigation();
  const handleCallWelfare = () => {
    navigation.navigate('복지사 호출');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleCallWelfare} style={styles.button}>
        <Text style={styles.callText}>복지사 호출</Text>
      </TouchableOpacity>
    </View>
  );
}

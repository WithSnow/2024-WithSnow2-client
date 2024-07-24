import React from 'react';
import {View, TextInput, Image} from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';
import styles from '../styles';

export default function SearchBar() {
  return (
    <View style={styles.searchBarContainer}>
      <TextInput
        style={styles.searchBar}
        placeholder="베프에서 핫플레이스를 검색해보세요."
      />
      <Image
        source={require('../../../../assets/images/microphone.png')}
        style={styles.microphoneIcon}
      />
    </View>
  );
}

import React from 'react';
import {View, TextInput, Image} from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';
import styles from '../../../styles/common/SearchBarStyles';

export default function SearchBar() {
  return (
    <View style={styles.searchBarContainer}>
      <Image
        source={require('../../../../assets/images/bf_searchBar.png')}
        style={styles.searchBarIcon}
      />
      <TextInput
        style={styles.searchBar}
        placeholder="베프에서 핫플레이스를 검색해보세요."
      />
      {/* <Image
        source={require('../../../../assets/images/microphone.png')}
        style={styles.searchBarIcon}
      /> */}
    </View>
  );
}

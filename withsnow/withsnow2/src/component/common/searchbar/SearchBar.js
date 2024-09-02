import React, {useState} from 'react';
import {View, TextInput, Image, TouchableOpacity} from 'react-native';
import styles from '../../../styles/common/SearchBarStyles';
import {useNavigation} from '@react-navigation/native';

export default function SearchBar() {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <View style={styles.searchBarContainer}>
      <Image
        source={require('../../../../assets/images/bf_searchBar.png')}
        style={styles.searchBarIcon}
      />
      <TextInput
        style={styles.searchBar}
        placeholder="베프에서 핫플레이스를 검색해보세요."
        value={searchQuery}
        onChangeText={setSearchQuery}
        onFocus={() => navigation.navigate('장소 검색')} // 포커스될 때 네비게이션 이동
      />
    </View>
  );
}

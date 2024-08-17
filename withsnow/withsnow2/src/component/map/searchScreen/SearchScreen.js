import React, {useState} from 'react';
import {
  FlatList,
  TextInput,
  TouchableOpacity,
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import styles from '../../../styles/map/SearchScreenStyles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import places from '../../../screen/map/places';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const mockLocations = [
  {
    id: 1,
    name: 'sookmyung',
    details: '서울 용산구 청파로47길 100',
  },
  {id: 2, name: '서울역', details: '서울 중구 봉래동2가 122-15'},
  {id: 3, name: '효창공원', details: '서울 용산구 효창원로'},
];

export default function SearchScreen({navigation}) {
  const [searchText, setSearchText] = useState('');
  const [filteredLocation, setFilteredLocation] = useState([]);
  const [recentSearches, setRecentSearches] = useState([]);

  const searchLocation = text => {
    setSearchText(text);

    if (text.trim().length > 0) {
      const results = mockLocations.filter(location =>
        location.name.includes(text),
      );
      setFilteredLocation(results);
    } else {
      setFilteredLocation([]);
    }
  };

  const selectLocation = location => {
    setRecentSearches(prevRecentSearches => [
      location.name,
      ...prevRecentSearches.filter(item => item !== location.name),
    ]);
    navigation.navigate('탐색', {selectedPlace: location});
  };

  const handleBackPress = () => {
    if (searchText.trim()) {
      setRecentSearches(prevRecentSearches => [
        searchText,
        ...prevRecentSearches.filter(item => item !== searchText),
      ]);
    }

    setSearchText('');
  };

  const clearRecentSearches = () => {
    setRecentSearches([]);
  };

  const deleteRecentResearch = itemToDelete => {
    setRecentSearches(prevRecentSearches =>
      prevRecentSearches.filter(item => item !== itemToDelete),
    );
  };

  // 즐겨찾기 장소 필터링
  const favoritePlaces = places.filter(place => place.isFavorite);

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      {/* 검색바 */}
      <View style={styles.searchBarContainer}>
        <TouchableOpacity onPress={handleBackPress}>
          <Icon style={styles.searchIcon} name="arrow-back-ios" />
        </TouchableOpacity>
        <TextInput
          placeholder="베프에서 핫플레이스를 검색해보세요."
          value={searchText}
          onChangeText={searchLocation}
          style={styles.searchBar}
        />
      </View>

      {/* 구분선 */}
      <View style={styles.divider} />

      {/* 즐겨찾기(가로 스크롤) */}
      <FlatList
        data={favoritePlaces}
        horizontal
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => selectLocation(item)}>
            <View style={styles.favoriteContainer}>
              <FontAwesome name="heart" style={styles.favoriteIcon} />
              <Text style={styles.favoriteName}>{item.name}</Text>
            </View>
          </TouchableOpacity>
        )}
        showsHorizontalScrollIndicator={false}
      />

      {/* 최근 검색 섹션은 검색 중이 아닐 때만 표시 */}
      {!searchText ? (
        <View style={styles.recentSearchContainer}>
          <View style={styles.recentHeaderContainer}>
            <Text style={styles.recentSearches}>최근 검색</Text>
            {recentSearches.length > 0 && (
              <TouchableOpacity onPress={clearRecentSearches}>
                <Text style={styles.clearButton}>전체 삭제</Text>
              </TouchableOpacity>
            )}
          </View>
          <FlatList
            data={recentSearches}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => (
              <View style={styles.recentItemContainer}>
                <Text style={styles.recentItem}>{item}</Text>
                <TouchableOpacity onPress={() => deleteRecentResearch(item)}>
                  <Icon name="close" style={styles.deleteIcon} />
                </TouchableOpacity>
              </View>
            )}
          />
        </View>
      ) : (
        <FlatList
          data={filteredLocation}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <TouchableOpacity onPress={() => selectLocation(item)}>
              <Text style={styles.name}>{item.name}</Text>
            </TouchableOpacity>
          )}
        />
      )}
    </KeyboardAvoidingView>
  );
}

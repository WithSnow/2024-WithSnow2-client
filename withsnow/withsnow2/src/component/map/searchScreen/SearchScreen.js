import React, {useState} from 'react';
import {
  FlatList,
  TextInput,
  TouchableOpacity,
  View,
  Text,
  Image,
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

  const addRecentSearch = location => {
    setRecentSearches(prevRecentSearches => [
      location.name,
      ...prevRecentSearches.filter(item => item !== location.name),
    ]);
  };

  // 검색어 따라 장소 필터링
  const searchLocation = text => {
    setSearchText(text);

    if (text.trim().length > 0) {
      const location = mockLocations.find(loc => loc.name.includes(text));
      if (location) {
        addRecentSearch(location);
      }
    }
  };

  // 장소 선택 -> 최근 검색 기록에 추가, 탐색 화면 이동
  const selectLocation = location => {
    addRecentSearch(location);
    navigation.navigate('탐색', {selectedPlace: location});
  };

  // 즐겨찾기 장소 필터링
  const favoritePlaces = places.filter(place => place.isFavorite);

  return (
    <View style={styles.container}>
      {/* 검색바 */}
      <View style={styles.searchBarContainer}>
        <Icon style={styles.searchIcon} name="arrow-back-ios"></Icon>
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

      {/* 필터링 장소 리스트 */}
      {/* <FlatList
        data={filteredLocation}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => selectLocation(item)}>
            <Text style={styles.name}>{item.name}</Text>
          </TouchableOpacity>
        )}
      /> */}

      {/* 최근 검색 리스트 */}
      <Text style={styles.recentSearch}>최근 검색</Text>
      <FlatList
        data={recentSearches}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => <Text style={styles.recentItem}>{item}</Text>}
      />
    </View>
  );
}

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
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {useFocusEffect} from '@react-navigation/native';
import findPlace from '../../../api/search/findPlace';
import getSearchHistory from '../../../api/search/getSearchHistory';

export default function SearchScreen({navigation}) {
  const [data, setData] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [recentSearches, setRecentSearches] = useState([]);

  // 장소 선택 -> map 으로 이동
  const selectLocation = location => {
    setRecentSearches(prevRecentSearches => [
      location.name,
      ...prevRecentSearches.filter(item => item !== location.name),
    ]);
    navigation.navigate('탐색', {selectedPlace: location});
  };

  // 아이콘 누르면 뒤로가기
  const handleBackPress = () => {
    if (searchText.trim()) {
      setRecentSearches(prevRecentSearches => [
        searchText,
        ...prevRecentSearches.filter(item => item !== searchText),
      ]);
    }

    setSearchText('');
  };

  // 최근 기록 전체 삭제
  const clearRecentSearches = () => {
    setRecentSearches([]);
  };

  // 검색 기록 단일 삭제
  const deleteRecentResearch = itemToDelete => {
    setRecentSearches(prevRecentSearches =>
      prevRecentSearches.filter(item => item !== itemToDelete),
    );
  };

  // 즐겨찾기 장소 필터링
  const favoritePlaces = places.filter(place => place.isFavorite);

  const searchLocation = text => {
    setSearchText(text);
  };

  // 장소 검색하기
  useFocusEffect(
    React.useCallback(() => {
      async function searchPlace() {
        try {
          const result = await findPlace(searchText);
          setData(result);
          console.log(result);
        } catch (error) {
          console.log(error);
        }
      }
      if (searchText.trim()) {
        searchPlace();
      } else {
        setData([]);
      }
    }, [searchText]),
  );

  // 최근 검색기록 가져오기
  useFocusEffect(
    React.useCallback(() => {
      async function setHistory() {
        try {
          const result = await getSearchHistory();
          setRecentSearches(result);
          console.log(result);
        } catch (error) {
          console.log(error);
        }
      }
      setHistory();
    }, []),
  );

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

      {/* 최금 검색기록 OR 장소 검색 화면 */}
      {searchText.trim() ? (
        // 검색 중일 때 검색 결과화면
        <FlatList
          data={data}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <TouchableOpacity onPress={() => selectLocation(item)}>
              <Text style={styles.name}>{item.name}</Text>
            </TouchableOpacity>
          )}
        />
      ) : (
        // 검색어 없을 땐 최근 검색기록 화면
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
                <FontAwesome5 name="map-marker-alt" style={styles.recentIcon} />
                <Text style={styles.recentItem}>{item}</Text>
                <TouchableOpacity onPress={() => deleteRecentResearch(item)}>
                  <Icon name="close" style={styles.deleteIcon} />
                </TouchableOpacity>
              </View>
            )}
          />
        </View>
      )}
    </KeyboardAvoidingView>
  );
}
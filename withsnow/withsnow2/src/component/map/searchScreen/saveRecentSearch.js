import AsyncStorage from '@react-native-async-storage/async-storage';

const saveRecentSearch = async query => {
  try {
    let recentSearches = await AsyncStorage.getItem('recentSearches');
    recentSearches = recentSearches ? JSON.parse(recentSearches) : [];

    recentSearches.unshift(query);
    if (recentSearches.length > 5) recentSearches.pop(); // 최근 검색 기록을 5개로 제한

    await AsyncStorage.setItem(
      'recentSearches',
      JSON.stringify(recentSearches),
    );
  } catch (error) {
    console.error(error);
  }
};

const loadRecentSearches = async () => {
  try {
    const recentSearches = await AsyncStorage.getItem('recentSearches');
    if (recentSearches !== null) {
      setRecentSearches(JSON.parse(recentSearches));
    }
  } catch (error) {
    console.error(error);
  }
};

// 검색 화면 로드 시 최근 검색 기록 불러오기
useEffect(() => {
  loadRecentSearches();
}, []);

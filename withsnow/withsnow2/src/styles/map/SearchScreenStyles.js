import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  searchBarContainer: {
    width: '100%',
    height: 48,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  searchBar: {
    flex: 1,
    height: '100%',
    color: '#C9C9C9',
    fontSize: 16,
    fontWeight: '400',
    letterSpacing: 1,
  },
  searchIcon: {
    fontSize: 20,
    marginLeft: 20,
    color: '#ADB0B0',
  },
  divider: {
    borderBottomColor: '#ADB0B0',
    borderBottomWidth: 0.7,
    marginVertical: 12,
  },
  favoriteContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
    height: 20,
  },
  favoriteIcon: {
    fontSize: 17,
    color: '#F9A596',
    marginRight: 7,
    marginTop: 2,
  },
  favoriteName: {
    color: '#696969',
    fontSize: 16,
    fontWeight: '400',
    letterSpacing: 1,
  },
  recentSearchContainer: {
    flex: 1, // 남은 공간을 차지하게 함
    marginTop: -10,
    paddingHorizontal: 10,
  },
  recentHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  recentSearches: {
    color: '#565656',
    fontSize: 16,
    fontWeight: '500',
  },
  clearButton: {
    color: '#F9A596',
    fontSize: 14,
  },
  name: {
    fontSize: 16,
    fontWeight: '400',
    letterSpacing: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#ADB0B0',
    paddingVertical: 10,
  },
  recentItem: {
    paddingVertical: 10,
    fontSize: 16,
    fontWeight: '400',
    letterSpacing: 1,
    color: '#3B3838',
  },
  recentItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ADB0B0',
  },
  deleteIcon: {
    fontSize: 20,
    color: '#ADB0B0',
  },
});

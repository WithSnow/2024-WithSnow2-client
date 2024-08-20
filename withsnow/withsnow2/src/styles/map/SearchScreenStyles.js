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
    borderBottomColor: '#DFDFDF',
    borderBottomWidth: 1,
    marginVertical: 10,
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
  },
  favoriteName: {
    color: '#696969',
    fontSize: 16,
    fontWeight: '400',
    letterSpacing: 1,
  },
  recentSearchContainer: {
    height: '75%',
    marginTop: -10,
  },
  recentHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  recentSearches: {
    color: '#565656',
    fontSize: 12,
    fontWeight: '400',
  },
  clearButton: {
    color: '#565656',
    fontSize: 12,
    fontWeight: '400',
    marginRight: 3,
  },
  filteredName: {
    fontSize: 16,
    fontWeight: '400',
    letterSpacing: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#DFDFDF',
    paddingVertical: 10,
  },
  recentItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#DFDFDF',
    padding: 10,
  },
  recentIcon: {
    marginRight: 10,
    color: '#ADB0B0',
    fontSize: 18,
  },
  recentItem: {
    flex: 1,
    textAlign: 'left',
    fontSize: 16,
    fontWeight: '400',
    letterSpacing: 1,
    color: '#3B3838',
  },

  deleteIcon: {
    fontSize: 20,
    color: '#ADB0B0',
    marginRight: 10,
  },
});

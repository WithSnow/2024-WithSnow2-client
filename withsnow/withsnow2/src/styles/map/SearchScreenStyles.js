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
    borderBottomWidth: 0.8,
    marginVertical: 10,
  },
  favoriteContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
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
});

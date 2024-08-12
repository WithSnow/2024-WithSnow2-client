import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  searchBarContainer: {
    width: '95%',
    height: 48,
    borderRadius: 24,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    marginTop: 10,
  },
  searchBar: {
    flex: 1,
    height: '100%',
    borderRadius: 24,
    backgroundColor: 'white',
    paddingHorizontal: 16,
  },
  searchBarIcon: {
    width: 28,
    height: 28,
  },
});

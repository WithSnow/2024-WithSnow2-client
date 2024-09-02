import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  mapPlaceholder: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    flexShrink: 0,
    backgroundColor: 'lightgray',
  },
  underBarContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  searchBarContainer: {
    position: 'absolute',
    top: 10,
    width: '100%',
    alignItems: 'center',
  },
  placeListContainer: {
    marginBottom: 50,
  },

  placeCardContainer: {
    position: 'absolute',
    bottom: 100,
    left: 0,
    right: 0,
    paddingVertical: 10,
  },
});

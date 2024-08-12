import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
  flatListContent: {
    paddingBottom: 80,
  },
  placeContainer: {
    backgroundColor: 'white',
    padding: 12,
    marginTop: 15,
    width: '100%',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  noFavoritesText: {
    padding: 16,
    textAlign: 'center',
    color: '#999',
  },
  lastText: {
    fontSize: 15,
    textAlign: 'center',
    marginTop: 20,
    color: 'gray',
  },
});

export default styles;

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
  recentButton: {
    width: '20%',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#F9A596',
    borderRadius: 15,
    padding: 4,
    paddingHorizontal: 8,
  },
  recentText: {
    fontSize: 14,
    fontWeight: '400',
    color: '#F9A596',
    marginBottom: 3,
    marginLeft: 2,
  },
});

export default styles;

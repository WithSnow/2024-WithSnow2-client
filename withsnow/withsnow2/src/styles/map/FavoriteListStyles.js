import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  closeButtonText: {
    fontSize: 16,
    color: 'blue',
  },
  flatListContent: {
    paddingBottom: 20,
  },
  placeContainer: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  noFavoritesText: {
    padding: 16,
    textAlign: 'center',
    color: '#999',
  },
});

export default styles;

import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: 'white',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    flex: 1,
    padding: 20,
    maxHeight: '80%',
    shadowOffset: {width: 0, height: -2},
    shadowOpacity: 0.3,
    shadowRadius: 5,
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.25)',
    elevation: 5,
  },
  placeContainer: {
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 20,
    alignItems: 'center',
    padding: 5,
    marginBottom: 15,
    paddingTop: 15,
    paddingLeft: 15,
    backgroundColor: 'white',
    shadowOffset: {width: 0, height: -2},
    shadowOpacity: 0.3,
    shadowRadius: 5,
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.25)',
    elevation: 5,
  },
  noFavoritesText: {
    textAlign: 'center',
    marginTop: 20,
  },
  handle: {
    width: 40,
    height: 5,
    backgroundColor: '#ccc',
    borderRadius: 3,
    alignSelf: 'center',
    marginTop: 5,
  },
  flatListContent: {
    paddingBottom: 20, // Add some padding to the bottom of the FlatList
  },
});

export default styles;

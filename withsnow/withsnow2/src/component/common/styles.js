import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  map: {
    flex: 1,
  },
  mapPlaceholder: {
    width: 1722.417,
    height: 954,
    flexShrink: 0,
    backgroundColor: 'gray',
  },

  searchBarContainer: {
    position: 'absolute',
    top: 10,
    left: '50%',
    transform: [{translateX: -165}],
    width: 330,
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
  },
  searchBar: {
    flex: 1,
    height: '100%',
    borderRadius: 24,
    backgroundColor: 'white',
    paddingHorizontal: 16,
  },
  microphoneIcon: {
    width: 12,
    height: 12,
  },

  categoryContainer: {
    position: 'absolute',
    top: 70,
    left: '50%',
    transform: [{translateX: -165}],
    width: 330,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  categoryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 24,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginHorizontal: 4,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  categoryIcon: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  categoryText: {
    fontSize: 13,
    color: '#333',
  },
});

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
    zIndex: 10,
    alignItems: 'center',
  },

  buttonText: {
    fontSize: 18,
    color: 'blue',
  },
  buttonOverlay: {
    position: 'absolute',
    top: '50%', // Adjust this value to position the button as needed
    left: 10, // Adjust this value to position the button as needed
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    padding: 10,
    borderRadius: 5,
  },
});

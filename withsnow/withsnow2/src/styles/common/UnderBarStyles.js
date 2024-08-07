import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  underBarContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 60,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.12,
    shadowRadius: 48,
    elevation: 5,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
});

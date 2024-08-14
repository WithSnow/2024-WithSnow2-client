import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  categoryWrapper: {
    position: 'absolute',
    top: 80,
    width: '100%',
    alignItems: 'center',
  },
  categoryContainer: {
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  categoryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 24,
    paddingVertical: 8,
    paddingHorizontal: 18,
    marginHorizontal: 4,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  activeButton: {
    color: '#FFFFFF',
    backgroundColor: '#F9A596',
  },
  activeText: {
    color: 'white',
  },
  categoryText: {
    color: '#696969',
    fontSize: 14,
    fontWeight: '400',
    paddingBottom: 4,
    marginLeft: 5,
  },
});

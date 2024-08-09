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
  categoryIcon: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  categoryText: {
    color: '#696969',
    fontSize: 13,
    fontFamily: 'Pretendard',
    fontWeight: '400',
    wordWrap: 'break-word',
  },
});

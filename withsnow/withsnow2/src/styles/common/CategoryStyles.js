import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
    color: '#696969',
    fontSize: 13,
    fontFamily: 'Pretendard',
    fontWeight: '400',
    wordWrap: 'break-word',
  },
});

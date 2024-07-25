import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
  searchBarIcon: {
    width: 28,
    height: 28,
  },
  searchBarText: {
    color: '#C9C9C9',
    fontSize: 16,
    fontFamily: 'Pretendard',
    fontWeight: '400',
    letterSpacing: 1,
    wordWrap: 'break-word',
  },
});

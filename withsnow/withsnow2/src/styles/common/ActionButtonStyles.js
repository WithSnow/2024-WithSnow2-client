import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  startButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#19BAFF',
    borderStyle: 'solid',
    borderRadius: 20,
    padding: 10,
    paddingRight: 15,
  },
  startText: {
    color: 'white',
    fontSize: 13,
    fontFamily: 'Pretendard',
    fontWeight: 'bold',
  },
  endButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#19BAFF',
    borderRadius: 20,
    padding: 10,
    paddingRight: 15,
    marginLeft: 10,
  },
  endText: {
    color: '#19BAFF',
    fontSize: 13,
    fontFamily: 'Pretendard',
    fontWeight: 'bold',
  },
});

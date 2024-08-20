import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F5F5',
  },

  //호출 버튼
  callButton: {
    backgroundColor: '#19BAFF',
    borderRadius: 10,
    alignSelf: 'flex-end',
    marginBottom: 10,
    marginTop: 15,
    marginRight: 15,
  },
  callText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '600',
    padding: 8,
    paddingHorizontal: 30,
    textAlign: 'center',
    justifyContent: 'center',
  },

  //오버레이
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 1,
  },
});

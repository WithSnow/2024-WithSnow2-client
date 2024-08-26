import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 50,
    position: 'absolute',
    bottom: 0,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  walkContainer: {
    width: '100%',
    flexDirection: 'row',
  },
  // 버튼 기본 스타일
  safeButton: {
    marginLeft: 10,
    width: 180,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 10,
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  fastButton: {
    marginHorizontal: 10,
    width: 180,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 10,
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  // 활성화된 버튼 스타일
  activeSafeButton: {
    backgroundColor: '#F9A596',
  },
  activeFastButton: {
    backgroundColor: '#F9A596',
  },
  // 텍스트 스타일
  safeText: {
    color: 'black',
    fontWeight: '400',
  },
  fastText: {
    color: 'black',
    fontWeight: '400',
  },
  activeSafeText: {
    color: 'white',
    fontWeight: '600',
  },
  activeFastText: {
    color: 'white',
    fontWeight: '600',
  },
  plusInfo: {
    fontSize: 10,
  },
  road: {
    fontSize: 20,
    fontWeight: '600',
  },
  distance: {
    fontSize: 12,
  },
  time: {
    fontSize: 18,
    fontWeight: '500',
  },
  startButton: {
    width: '100%',
    height: 70,
    marginTop: -30,
    bottom: -50,
    backgroundColor: '#F9A596',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  startText: {
    fontSize: 24,
    color: 'white',
    letterSpacing: 1,
    fontWeight: '600',
    alignItems: 'center',
    textAlign: 'center',
    marginBottom: 6,
  },

  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
});

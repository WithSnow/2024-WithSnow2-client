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
  // 기본 안전한 길 버튼 스타일
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
  // 기본 더 빠른 길 버튼 스타일
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
  // 활성화된 안전한 길 버튼 스타일
  activeSafeButton: {
    backgroundColor: '#F9A596',
  },
  // 활성화된 더 빠른 길 버튼 스타일
  activeFastButton: {
    backgroundColor: '#F9A596',
  },

  // 기본 안전한 길 텍스트 스타일
  safeText: {
    color: 'black',
    fontWeight: '400',
  },
  // 기본 더 빠른 길 텍스트 스타일
  fastText: {
    color: 'black',

    fontWeight: '400',
  },
  // 활성화된 안전한 길 텍스트 스타일
  activeSafeText: {
    color: 'white', // 활성화된 상태의 텍스트 색상
    fontWeight: '600',
  },
  // 활성화된 더 빠른 길 텍스트 스타일
  activeFastText: {
    color: 'white', // 활성화된 상태의 텍스트 색상
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
});

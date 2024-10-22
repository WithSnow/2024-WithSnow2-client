import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    paddingBottom: 15,
    backgroundColor: '#FFFFFF',
  },
  upperContainer: {
    width: '100%',
    flexDirection: 'row',
  },
  placeSelect: {
    width: '100%',
    flexDirection: 'column',
    marginTop: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    backgroundColor: 'rgba(201, 201, 201, 0.5)',
    marginTop: 5,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#C9C9C9',
    width: '73%',
    fontSize: 16,
    fontWeight: '400',
    letterSpacing: 1,
    color: '#1A1A1A',
    paddingVertical: 6,
    paddingLeft: 10,
  },
  swapIcon: {
    position: 'absolute',
    left: 13,
    top: '40%',
    color: '#F9A596',
    fontSize: 30,
  },
  closeIcon: {
    position: 'absolute',
    right: 15,
    top: 10,
    fontSize: 20,
    color: '#C9C9C9',
  },
  lowerContainer: {
    flexDirection: 'row',
    left: '50%',
    alignItems: 'center',
  },

  normalButton: {
    marginTop: 10,
    flexDirection: 'row',
    marginRight: 20,
    borderRadius: 20,
    paddingVertical: 6.5,
    paddingHorizontal: 20,
    textAlign: 'center',
    borderColor: '#F9A596',
    borderWidth: 1,
    backgroundColor: '#FFFFFF',
  },

  normalIcon: {
    color: '#F9A596',
    fontSize: 20,
    marginRight: 5,
    marginTop: 3,
  },

  normalText: {
    color: '#F9A596',
    fontSize: 16,
    fontWeight: '400',
    letterSpacing: 1,
    lineHeight: 24,
  },
  // 활성화된 텍스트 스타일
  activeButton: {
    backgroundColor: '#F9A596',
    borderColor: '#F9A596',
  },
  activeText: {
    color: 'white',
  },
  activeIcon: {
    color: 'white',
  },
});

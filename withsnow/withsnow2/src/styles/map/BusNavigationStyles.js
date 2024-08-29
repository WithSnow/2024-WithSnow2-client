import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  // 전체 컨테이너
  container: {
    height: '100%',
    padding: 10,
    backgroundColor: '#f9f9f9',
  },

  // 경로 카드 공통 스타일
  directionCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  noShadow: {
    shadowColor: 'transparent',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
  },
  roadType: {
    color: '#19BAFF',
    fontSize: 13,
    fontWeight: '500',
    letterSpacing: 1,
  },
  time: {
    color: '#000000',
    fontSize: 20,
    fontWeight: '700',
    letterSpacing: 1,
    marginBottom: 10,
  },

  // 가로 시간 바 스타일
  way: {
    width: '90%',
    // backgroundColor: '#D9D9D9',
    borderRadius: 999,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  horizontalIconContainer: {
    backgroundColor: '#D9D9D9',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: -10,
    borderRadius: 999,
  },
  horizontalBusIconContainer: {
    backgroundColor: '#19BAFF',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderRadius: 999,
    margin: -10,
    marginLeft: -12,
  },
  horizontalBusIcon: {
    color: 'white',
    backgroundColor: '#19BAFF',
    padding: 7,
    borderRadius: 999,
    zIndex: 2,
    fontSize: 17,
  },
  horizontalWheelIcon: {
    color: '#000000',
    backgroundColor: '#D9D9D9',
    padding: 7,
    borderRadius: 999,
    left: 0,
    zIndex: 2,
    fontSize: 17,
  },
  walkTime: {
    fontSize: 12,
    fontWeight: '500',
    color: 'black',
    backgroundColor: '#D9D9D9',
    paddingHorizontal: 10,
    paddingVertical: 3,
    marginHorizontal: -10,
  },
  busWayText: {
    fontSize: 12,
    color: 'white',
    backgroundColor: '#19BAFF',
    paddingVertical: 3,
  },

  // 세로 시간 바 스타일
  timeBar: {
    alignItems: 'center',
    marginRight: 20,
    marginTop: 10,
  },
  timeAndWayContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 15,
  },
  verticalBusIcon: {
    color: '#FFFFFF',
    backgroundColor: '#19BAFF',
    padding: 5,
    borderRadius: 999,
    fontSize: 13,
  },
  verticalWheelIcon: {
    color: '#000000',
    backgroundColor: '#D9D9D9',
    padding: 5,
    borderRadius: 999,
    fontSize: 13,
  },
  busDottedLine: {
    flex: 1,
    height: 50,
    right: 10,
    borderColor: '#19BAFF',
    borderStyle: 'dotted',
    borderWidth: 0.8,
  },
  walkDottedLine: {
    flex: 1,
    height: 20,
    right: 10,
    borderColor: '#999',
    borderStyle: 'dotted',
    borderWidth: 1,
  },
  dot: {
    width: 6,
    height: 6,
    right: 10,
    borderRadius: 3,
    backgroundColor: '#D9D9D9',
    marginHorizontal: 5,
  },
  timeTextContainer: {
    flexDirection: 'row',
  },
  busText: {
    fontSize: 10,
    fontWeight: '600',
    lineHeight: 14,
    color: '#19BAFF',
    left: 5,
    top: 3,
  },
  walkText: {
    fontSize: 10,
    fontWeight: '700',
    color: '#696969',
    left: 5,
    top: 3,
  },

  // 경로 정보 스타일
  wayContainer: {
    wayContainer: {
      flex: 1,
      paddingLeft: 10,
    },
  },
  startContainer: {
    top: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  stationNumberContainer: {
    backgroundColor: '#C55C1D',
    borderRadius: 50,
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  stationNumber: {
    color: '#fff',
    fontWeight: 'bold',
  },
  stationContainer: {
    backgroundColor: '#77C4A3',
    borderRadius: 50,
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
    marginHorizontal: -3,
  },
  station: {
    fontSize: 6,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  startName: {
    fontSize: 12,
    color: 'black',
    fontWeight: '400',
  },
  endName: {
    fontSize: 12,
    color: 'black',
    fontWeight: '400',
    marginTop: 5,
  },

  // 버스 정보 스타일
  bus: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 5,
  },
  busTypeContainer: {
    padding: 1,
    marginRight: 10,
    left: -3,
  },
  busType: {
    textAlign: 'center',
    backgroundColor: 'white',
    borderColor: '#19BAFF',
    borderWidth: 1,
    borderRadius: 4,
    color: '#19BAFF',
    padding: 2,
    fontSize: 8,
    fontWeight: '500',
  },
  busNormalType: {
    textAlign: 'center',
    backgroundColor: 'white',
    borderColor: '#D9D9D9',
    borderWidth: 1,
    borderRadius: 4,
    color: '#D9D9D9',
    padding: 2,
    fontSize: 8,
    fontWeight: '500',
  },
  busNumber: {
    color: '#19BAFF',
    fontSize: 13,
    fontWeight: '700',
    marginRight: 10,
    top: -1,
    left: -3,
  },

  waitingTime: {
    color: '#FF0000',
    fontSize: 11,
    fontWeight: '400',
    top: -3,
    left: -3,
  },

  // 추가 정보 스타일
  plusInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 55,
    marginBottom: 3,
    marginTop: -5,
  },
  plusInfoText: {
    fontSize: 12,
    color: '#696969',
    marginLeft: 3,
  },
});

export default styles;

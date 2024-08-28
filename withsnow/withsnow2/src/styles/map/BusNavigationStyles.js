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
  roadType: {
    color: '#19BAFF',
    fontSize: 13,
    fontWeight: '500',
    letterSpacing: 1,
    marginBottom: 5,
  },
  time: {
    color: '#000000',
    fontSize: 20,
    fontWeight: '700',
    letterSpacing: 1,
    marginBottom: 10,
  },

  // 아이콘과 시간 바 스타일
  way: {
    width: '100%',
    backgroundColor: '#D9D9D9',
    borderRadius: 999,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  iconContainer: {
    backgroundColor: '#D9D9D9',
    borderRadius: 999,
    flexDirection: 'row', // 아이콘과 텍스트를 가로로 배치
    alignItems: 'center',
    justifyContent: 'center',
  },
  busIconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#19BAFF',
    padding: 5,
  },
  busIcon: {
    color: 'white',
    backgroundColor: '#19BAFF',
    padding: 5,
    borderRadius: 999,
  },
  wheelIcon: {
    color: 'black',
  },
  walkTime: {
    fontSize: 12,
    color: '#555',
    marginLeft: 10,
  },
  busWayText: {
    fontSize: 12,
    color: 'white',
    backgroundColor: '#19BAFF',
    padding: 5,
  },

  // 세로 시간 바 스타일
  timeBar: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 15,
    right: 150,
    top: 20,
  },
  busDottedLine: {
    flex: 1,
    height: 50,
    borderColor: '#19BAFF',
    borderStyle: 'dotted',
    borderWidth: 0.8,
  },
  walkDottedLine: {
    flex: 1,
    height: 20,
    borderColor: '#999',
    borderStyle: 'dotted',
    borderWidth: 1,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#999',
    marginHorizontal: 5,
  },
  timeTextContainer: {
    position: 'absolute',
    right: 130,
    bottom: 27,
    left: -100,
    alignItems: 'flex-end',
  },
  busText: {
    fontSize: 10,
    fontWeight: '600',
    lineHeight: 14,
    marginBottom: 58,
    color: '#19BAFF',
  },
  walkText: {
    fontSize: 10,
    color: '#696969',
    marginBottom: 5,
  },

  // 경로 정보 스타일
  wayContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  startContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  stationNumberContainer: {
    backgroundColor: '#007bff',
    borderRadius: 50,
    width: 25,
    height: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  stationNumber: {
    color: '#fff',
    fontWeight: 'bold',
  },
  stationContainer: {
    marginRight: 10,
  },
  station: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  startName: {
    fontSize: 14,
    color: '#555',
  },
  endName: {
    fontSize: 14,
    color: '#555',
    marginTop: 10,
  },

  // 버스 정보 스타일
  bus: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#f4f4f4',
    marginBottom: 10,
  },
  busTypeContainer: {
    backgroundColor: '#007bff',
    borderRadius: 3,
    paddingHorizontal: 5,
    paddingVertical: 2,
    marginRight: 10,
  },
  busType: {
    color: '#fff',
    fontSize: 12,
  },
  busNormalType: {
    color: '#000',
    fontSize: 12,
  },
  busNumber: {
    fontSize: 14,
    fontWeight: 'bold',
    marginRight: 10,
  },
  waitingTime: {
    fontSize: 12,
    color: '#777',
  },

  // 추가 정보 스타일
  plusInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
  },
  plusInfoText: {
    fontSize: 12,
    color: '#555',
    marginLeft: 5,
  },
});

export default styles;

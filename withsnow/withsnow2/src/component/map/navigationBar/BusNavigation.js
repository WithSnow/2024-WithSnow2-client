import React from 'react';
import {Text, View, ScrollView} from 'react-native';
import styles from '../../../styles/map/BusNavigationStyles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// 아이콘과 시간을 보여주는 컴포넌트
const WaySegment = ({iconName, time, style}) => (
  <>
    {/* <View style={style.container}> */}
    <FontAwesome name={iconName} style={style.icon} />
    <Text style={style.timeText}>{time}</Text>
    {/* </View> */}
  </>
);

// 세로 시간 바 컴포넌트
const TimeBar = ({busText, walkText}) => (
  <View style={styles.timeBar}>
    <FontAwesome name="bus" style={styles.busIcon} />
    <View style={styles.busDottedLine} />

    <FontAwesome name="wheelchair-alt" style={styles.wheelIcon} />

    <View style={styles.walkDottedLine} />
    <View style={styles.dot} />
    <View style={styles.timeTextContainer}>
      <Text style={styles.busText}>{busText}</Text>
      <Text style={styles.walkText}>{walkText}</Text>
    </View>
  </View>
);

// 버스 정보 블록 컴포넌트
const BusInfo = ({type, number, waitingTime, normalType = false}) => (
  <View style={styles.bus}>
    <View style={styles.busTypeContainer}>
      <Text style={normalType ? styles.busNormalType : styles.busType}>
        {type}
      </Text>
    </View>
    <Text style={styles.busNumber}>{number}</Text>
    <Text style={styles.waitingTime}>{waitingTime}</Text>
  </View>
);

// 경로 카드 컴포넌트
const DirectionCard = ({
  roadType,
  time,
  segments,
  busText,
  walkText,
  startInfo,
  buses,
  plusInfo,
}) => (
  <View style={styles.directionCard}>
    <Text style={styles.roadType}>{roadType}</Text>
    <Text style={styles.time}>{time}</Text>

    {/* 시간 바 */}
    <View style={styles.way}>
      {segments.map((segment, index) => (
        <WaySegment
          key={index}
          iconName={segment.iconName}
          time={segment.time}
          style={segment.style}
        />
      ))}
    </View>

    {/* 세로 시간 바 */}
    <TimeBar busText={busText} walkText={walkText} />

    {/* 경로 정보 */}
    <View style={styles.wayContainer}>
      <View style={styles.startContainer}>
        <View style={styles.stationNumberContainer}>
          <Text style={styles.stationNumber}>{startInfo.number}</Text>
        </View>
        <View style={styles.stationContainer}>
          <Text style={styles.station}>{startInfo.station}</Text>
        </View>
        <Text style={styles.startName}>{startInfo.startName}</Text>
      </View>

      {buses.map((bus, index) => (
        <BusInfo
          key={index}
          type={bus.type}
          number={bus.number}
          waitingTime={bus.waitingTime}
          normalType={bus.normalType}
        />
      ))}

      <Text style={styles.endName}>{startInfo.endName}</Text>
    </View>

    {/* 추가 정보 */}
    <View style={styles.plusInfo}>
      <MaterialCommunityIcons name="elevator" />
      <Text style={styles.plusInfoText}>{plusInfo}</Text>
    </View>
  </View>
);

export default function BusNavigation() {
  const safeRouteSegments = [
    {
      iconName: 'wheelchair-alt',
      time: '1분',
      style: {
        container: styles.iconContainer,
        timeText: styles.walkTime,
        icon: styles.wheelIcon,
      },
    },
    {
      iconName: 'bus',
      time: '4분',
      style: {
        container: styles.busIconContainer,
        timeText: styles.busWayText,
        icon: styles.busIcon,
      },
    },
    {
      iconName: 'wheelchair-alt',
      time: '3분',
      style: {
        container: styles.iconContainer,
        timeText: styles.walkTime,
        icon: styles.wheelIcon,
      },
    },
  ];

  const fastRouteSegments = [
    {
      iconName: 'wheelchair-alt',
      time: '1분',
      style: {container: styles.iconContainer, timeText: styles.walkTime},
    },
    {
      iconName: 'bus',
      time: '4분',
      style: {container: styles.busIconContainer, timeText: styles.busWayText},
    },
  ];

  const safeRouteBuses = [
    {type: '저상', number: '400', waitingTime: '18분'},
    {type: '저상', number: '400', waitingTime: '34분'},
    {type: '일반', number: '400', waitingTime: '52분', normalType: true},
  ];

  const fastRouteBuses = [
    {type: '저상', number: '0411', waitingTime: '8분'},
    {type: '저상', number: '0411', waitingTime: '26분'},
    {type: '일반', number: '0411', waitingTime: '41분', normalType: true},
  ];

  const startInfo = {
    number: '6',
    station: '경의\n중앙',
    startName: '효창공원앞역',
    endName: '숙명여대 후문',
  };

  return (
    <ScrollView style={styles.container}>
      {/* 안전한 길 대중교통 경로 카드 */}
      <DirectionCard
        roadType="안전한 길"
        time="8분"
        segments={safeRouteSegments}
        busText="간선"
        walkText="도보"
        startInfo={startInfo}
        buses={safeRouteBuses}
        plusInfo="경의중앙선 대합실 앞"
      />

      {/* 더 짧은 길 대중교통 경로 카드 */}
      <DirectionCard
        roadType="더 짧은 길"
        time="5분"
        segments={fastRouteSegments}
        busText="지선"
        walkText="도착"
        startInfo={startInfo}
        buses={fastRouteBuses}
        plusInfo="계단 주의"
      />
    </ScrollView>
  );
}

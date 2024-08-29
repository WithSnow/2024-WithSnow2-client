import React from 'react';
import {Text, View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from '../../../styles/map/BusNavigationStyles';

export const TimeBar = ({busText, walkText}) => (
  <View style={styles.timeBar}>
    <View style={styles.timeTextContainer}>
      <FontAwesome name="bus" style={styles.verticalBusIcon} />
      <Text style={styles.busText}>{busText}</Text>
    </View>
    <View style={styles.busDottedLine} />
    <View style={styles.timeTextContainer}>
      <FontAwesome name="wheelchair-alt" style={styles.verticalWheelIcon} />
      <Text style={styles.walkText}>{walkText}</Text>
    </View>
    <View style={styles.walkDottedLine} />
    <View style={styles.dot} />
  </View>
);

export const WaySegment = ({iconName, time, style, width}) => (
  <>
    <FontAwesome name={iconName} style={style.icon} />
    <View style={[style.container, {width}]}>
      <Text style={style.timeText}>{time}</Text>
    </View>
  </>
);

export const BusInfo = ({type, number, waitingTime, normalType = false}) => (
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

export const DirectionCard = ({
  roadType,
  time,
  segments,
  busText,
  walkText,
  startInfo,
  buses,
  plusInfo,
  disableShadow = false,
}) => {
  const totalTime = segments.reduce((total, segment) => {
    const segmentTime = parseInt(segment.time);
    return total + segmentTime;
  }, 0);

  return (
    <View style={[styles.directionCard, disableShadow && styles.noShadow]}>
      <Text style={styles.roadType}>{roadType}</Text>
      <Text style={styles.time}>{time}</Text>
      <View style={styles.way}>
        {segments.map((segment, index) => {
          const segmentTime = parseInt(segment.time);
          const widthPercentage = (segmentTime / totalTime) * 100;
          return (
            <WaySegment
              key={index}
              iconName={segment.iconName}
              time={segment.time}
              style={segment.style}
              width={`${widthPercentage}%`}
            />
          );
        })}
      </View>
      <View style={styles.timeAndWayContainer}>
        <TimeBar busText={busText} walkText={walkText} />
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
      </View>
      <View style={styles.plusInfo}>
        <MaterialCommunityIcons name="elevator" size={20} />
        <Text style={styles.plusInfoText}>{plusInfo}</Text>
      </View>
    </View>
  );
};

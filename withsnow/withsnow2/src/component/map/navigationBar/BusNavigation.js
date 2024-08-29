import React from 'react';
import {ScrollView, TouchableOpacity} from 'react-native';
import {DirectionCard} from './BusComponent';
import styles from '../../../styles/map/BusNavigationStyles';

export default function BusNavigation({setSelectedCard, setActiveBus}) {
  const safeRouteSegments = [
    {
      iconName: 'wheelchair-alt',
      time: '1분',
      style: {
        container: styles.horizontalIconContainer,
        timeText: styles.walkTime,
        icon: styles.horizontalWheelIcon,
      },
    },
    {
      iconName: 'bus',
      time: '4분',
      style: {
        container: styles.horizontalBusIconContainer,
        timeText: styles.busWayText,
        icon: styles.horizontalBusIcon,
      },
    },
    {
      iconName: 'wheelchair-alt',
      time: '3분',
      style: {
        container: styles.horizontalIconContainer,
        timeText: styles.walkTime,
        icon: styles.horizontalWheelIcon,
      },
    },
  ];

  const fastRouteSegments = [
    {
      iconName: 'wheelchair-alt',
      time: '1분',
      style: {
        container: styles.horizontalIconContainer,
        timeText: styles.walkTime,
        icon: styles.horizontalWheelIcon,
      },
    },
    {
      iconName: 'bus',
      time: '4분',
      style: {
        container: styles.horizontalBusIconContainer,
        timeText: styles.busWayText,
        icon: styles.horizontalBusIcon,
      },
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
      <TouchableOpacity
        onPress={() => {
          setSelectedCard({
            roadType: '안전한 길',
            time: '8분',
            segments: safeRouteSegments,
            busText: '간선',
            walkText: '도보',
            startInfo: startInfo,
            buses: safeRouteBuses,
            plusInfo: '경의중앙선 대합실 앞',
          });
          setActiveBus(false);
        }}>
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
      </TouchableOpacity>

      {/* 더 짧은 길 대중교통 경로 카드 */}
      <TouchableOpacity
        onPress={() => {
          setSelectedCard({
            roadType: '더 짧은 길',
            time: '5분',
            segments: fastRouteSegments,
            busText: '지선',
            walkText: '도보',
            startInfo: startInfo,
            buses: fastRouteBuses,
            plusInfo: '계단 주의',
          });
          setActiveBus(false);
        }}>
        <DirectionCard
          roadType="더 짧은 길"
          time="5분"
          segments={fastRouteSegments}
          busText="지선"
          walkText="도보"
          startInfo={startInfo}
          buses={fastRouteBuses}
          plusInfo="계단 주의"
        />
      </TouchableOpacity>
    </ScrollView>
  );
}

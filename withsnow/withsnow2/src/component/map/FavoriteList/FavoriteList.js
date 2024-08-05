import React from 'react';
import {FlatList, Text, View} from 'react-native';
import styles from '../../../styles/map/FavoriteListStyles';
import PlaceDescription from '../placeAddiction/PlaceDescription';
import {PanGestureHandler} from 'react-native-gesture-handler';
import Animated, {
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

export default function FavoriteList({
  places,
  toggleFavorite,
  closeFavoriteList,
}) {
  const translateY = useSharedValue(0);
  const isScrolling = useSharedValue(false);

  const gestureHandler = useAnimatedGestureHandler({
    onStart: () => {
      isScrolling.value = false;
    },
    onActive: event => {
      if (!isScrolling.value) {
        translateY.value = event.translationY;
      }
    },
    onEnd: event => {
      if (!isScrolling.value && event.translationY > 100) {
        runOnJS(closeFavoriteList)();
      } else {
        translateY.value = withSpring(0, {
          damping: 20,
          stiffness: 90,
          mass: 1,
          overshootClamping: true,
          restDisplacementThreshold: 0.01,
          restSpeedThreshold: 0.01,
        });
      }
    },
  });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateY: translateY.value}],
    };
  });

  const favoritePlaces = places.filter(place => place.isFavorite);

  const handleScroll = () => {
    isScrolling.value = true;
  };

  return (
    <PanGestureHandler onGestureEvent={gestureHandler}>
      <Animated.View style={[styles.container, animatedStyle]}>
        <View style={styles.handle} />
        {favoritePlaces.length > 0 ? (
          <FlatList
            data={favoritePlaces}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => (
              <View style={styles.placeContainer}>
                <PlaceDescription
                  place={item}
                  toggleFavorite={() => toggleFavorite(item.id)}
                />
              </View>
            )}
            contentContainerStyle={styles.flatListContent}
            scrollEnabled={true}
            scrollEventThrottle={16}
            onScrollBeginDrag={handleScroll}
          />
        ) : (
          <Text style={styles.noFavoritesText}>즐겨찾기가 없습니다.</Text>
        )}
      </Animated.View>
    </PanGestureHandler>
  );
}

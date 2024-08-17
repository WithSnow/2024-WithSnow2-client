import React from 'react';
import {View, TouchableOpacity, Text, ScrollView} from 'react-native';
import styles from '../../../styles/common/CategoryStyles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/Feather';

const categories = [
  {
    name: '음식점',
    icon: isActive => (
      <Ionicons
        name="restaurant-outline"
        size={20}
        color={isActive ? 'white' : '#ADB0B0'}
      />
    ),
  },
  {
    name: '카페',
    icon: isActive => (
      <Ionicons
        name="cafe-outline"
        size={20}
        color={isActive ? 'white' : '#ADB0B0'}
      />
    ),
  },
  {
    name: '문화공간',
    icon: isActive => (
      <Icon name="flag" size={20} color={isActive ? 'white' : '#ADB0B0'} />
    ),
  },
  // 필요한 만큼 카테고리 추가
];

const Category = ({selectedCategory, onSelectCategory}) => {
  return (
    <View style={styles.categoryWrapper}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categoryContainer}>
        {categories.map((category, index) => {
          const isActive = selectedCategory === category.name;
          return (
            <TouchableOpacity
              key={index}
              style={[styles.categoryButton, isActive && styles.activeButton]}
              onPress={() => onSelectCategory(category.name)}>
              {category.icon(isActive)}
              <Text
                style={[styles.categoryText, isActive && styles.activeText]}>
                {category.name}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Category;

import React from 'react';
import {View, TouchableOpacity, Image, Text, ScrollView} from 'react-native';
import styles from '../../../styles/common/CategoryStyles';

const categories = [
  {name: '음식점', icon: require('../../../../assets/images/food.png')},
  {name: '카페', icon: require('../../../../assets/images/cafe.png')},
  {
    name: '문화공간',
    icon: require('../../../../assets/images/recommend.png'),
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
              <Image source={category.icon} style={styles.categoryIcon} />
              <Text style={styles.categoryText}>{category.name}</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Category;

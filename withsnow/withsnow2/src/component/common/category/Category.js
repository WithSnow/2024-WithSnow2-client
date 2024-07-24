// src/common/tabbar/TabBar.js
import React from 'react';
import {View, TouchableOpacity, Image, Text} from 'react-native';
import styles from '../styles';

const Category = () => {
  return (
    <View style={styles.categoryContainer}>
      <TouchableOpacity style={styles.categoryButton}>
        <Image
          source={require('../../../../assets/images/food.png')}
          style={styles.categoryIcon}
        />
        <Text style={styles.categoryText}>음식점</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.categoryButton}>
        <Image
          source={require('../../../../assets/images/cafe.png')}
          style={styles.categoryIcon}
        />
        <Text style={styles.categoryText}>카페</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.categoryButton}>
        <Image
          source={require('../../../../assets/images/recommend.png')}
          style={styles.categoryIcon}
        />
        <Text style={styles.categoryText}>베프픽!추천장소</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Category;

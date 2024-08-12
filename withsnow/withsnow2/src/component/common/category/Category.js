import React from 'react';
import {View, TouchableOpacity, Image, Text, ScrollView} from 'react-native';
import styles from '../../../styles/common/CategoryStyles';

const Category = () => {
  return (
    <View style={styles.categoryWrapper}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categoryContainer}>
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
        <TouchableOpacity style={styles.categoryButton}>
          <Image
            source={require('../../../../assets/images/recommend.png')}
            style={styles.categoryIcon}
          />
          <Text style={styles.categoryText}>베프픽!추천장소</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryButton}>
          <Image
            source={require('../../../../assets/images/recommend.png')}
            style={styles.categoryIcon}
          />
          <Text style={styles.categoryText}>베프픽!추천장소</Text>
        </TouchableOpacity>
        {/* 필요한 만큼 카테고리 버튼 추가 */}
      </ScrollView>
    </View>
  );
};

export default Category;

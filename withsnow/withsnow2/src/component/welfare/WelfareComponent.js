import React from 'react';
import {FlatList, View, TouchableOpacity, Text} from 'react-native';
import styles from '../../styles/welfare/WelfareStyles.js';
import WelfareCard from './WelfareCard.js';
import welfares from '../../screen/welfare/welfares.js';

export default function WelfareComponent() {
  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={
          <TouchableOpacity style={styles.callButton}>
            <Text>선택리스트 호출하기</Text>
          </TouchableOpacity>
        }
        data={welfares}
        keyExtractor={item => item.id}
        renderItem={({item}) => <WelfareCard welfare={item} />}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
}

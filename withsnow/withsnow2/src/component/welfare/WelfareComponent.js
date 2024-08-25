import React, {useState, useEffect, useContext} from 'react';
import {FlatList, View, TouchableOpacity, Text} from 'react-native';
import styles from '../../styles/welfare/WelfareStyles.js';
import WelfareCard from './WelfareCard.js';
import welfares from '../../screen/welfare/welfares.js';
import WelfareMessage from './WelfareMessage.js';
import {WelfareContext} from '../../context/WelfareContext.js';

export default function WelfareComponent() {
  const {welfareList, setWelfareList} = useContext(WelfareContext);
  const [showWelfareMessage, setShowWelfareMessage] = useState(false);

  const handleShowMessage = () => {
    setShowWelfareMessage(true);
  };

  const handleHideMessage = () => {
    setShowWelfareMessage(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.callButton} onPress={handleShowMessage}>
        <Text style={styles.callText}>선택리스트 호출하기</Text>
      </TouchableOpacity>

      {showWelfareMessage && (
        <>
          <View style={styles.overlay} />
          <WelfareMessage
            welfareList={welfareList}
            onClose={handleHideMessage}
          />
        </>
      )}
      <FlatList
        data={welfares}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <WelfareCard
            welfare={item}
            welfareList={welfareList}
            setWelfareList={setWelfareList}
          />
        )}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
}

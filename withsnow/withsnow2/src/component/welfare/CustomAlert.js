import React from 'react';
import {Modal, View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from '../../styles/welfare/CustomAlertStyles';

export default function CustomAlert({
  modalVisible,
  setModalVisible,
  welfareList,
}) {
  const navigation = useNavigation();
  // 모달을 닫는 함수
  const closeModal = () => {
    setModalVisible(false);
  };

  const handleConfirm = () => {
    closeModal();
    navigation.navigate('복지사 배정', {welfareList});
  };

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={closeModal}>
      <View style={styles.modalOverlay}>
        <View style={styles.alertContainer}>
          <Text style={styles.alertMessage}>
            선택하신 복지사님 리스트에{'\n'} 호출 메시지를 보내시겠습니까?
          </Text>

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={handleConfirm}
              style={styles.alertButton}>
              <Text style={styles.buttonText}>예</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={closeModal} style={styles.alertButton}>
              <Text style={styles.buttonText}>아니오</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

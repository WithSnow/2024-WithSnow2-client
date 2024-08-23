import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import styles from '../../styles/map/MapStyles';
import UnderBar from '../../component/common/underBar/UnderBar';
import { useFocusEffect } from '@react-navigation/native';
import MyPageDetailComponent from '../../component/mypage/MyPageDetailComponent';

export default function MyPageDetailScreen({ route }) {
    const { activeTab: initialActiveTab = '상세페이지' } = route.params || {};
    const [activeTab, setActiveTab] = useState(initialActiveTab);
    useFocusEffect(
        React.useCallback(() => {
            if (route.params?.activeTab) {
                setActiveTab(route.params.activeTab);
            } else {
                setActiveTab('상세페이지');
            }
        }, [route.params?.activeTab]),
    );

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <MyPageDetailComponent username={'베리어프롬'} />
            </ScrollView>
            <UnderBar activeTab={activeTab} setActiveTab={setActiveTab} />
        </SafeAreaView>
    );
}

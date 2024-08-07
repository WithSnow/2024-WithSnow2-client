import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import styles from '../../styles/map/MapStyles';
import UnderBar from '../../component/common/underBar/UnderBar';
import MyPageComponent from '../../component/mypage/MyPageComponent';


export default function MyPageScreen({ navigation, route }) {
    const { activeTab: initialActiveTab = '마이페이지' } = route.params || {};
    const [activeTab, setActiveTab] = useState(initialActiveTab);

    useEffect(() => {
        if (route.params?.activeTab) {
            setActiveTab(route.params.activeTab);
        }
    }, [route.params?.activeTab]);

    return (
        <View style={styles.container}>
            <MyPageComponent />


            <UnderBar activeTab={activeTab} setActiveTab={setActiveTab} />
        </View>
    );
}

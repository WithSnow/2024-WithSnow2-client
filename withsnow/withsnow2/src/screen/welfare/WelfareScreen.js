import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import styles from '../../styles/map/MapStyles';
import UnderBar from '../../component/common/underBar/UnderBar';
import WelfareComponent from '../../component/welfare/WelfareComponent';


export default function WelfareScreen({ navigation, route }) {
    const { activeTab: initialActiveTab = '복지사 호출' } = route.params || {};
    const [activeTab, setActiveTab] = useState(initialActiveTab);

    useEffect(() => {
        if (route.params?.activeTab) {
            setActiveTab(route.params.activeTab);
        }
    }, [route.params?.activeTab]);

    return (
        <View style={styles.container}>
            <WelfareComponent />


            <UnderBar activeTab={activeTab} setActiveTab={setActiveTab} />
        </View>
    );
}

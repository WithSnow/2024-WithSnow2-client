import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        margin: 15,
        justifyContent: 'space-between',
    },
    topButton: {
        height: '31%',
        backgroundColor: 'white',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 20,
        marginBottom: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        flexDirection: 'column',
        alignItems: 'center',
    },
    middleButtons: {
        marginTop: 10,           // 상단 여백
    },
    bottomButton: {
        marginBottom: 40,   // 하단 여백
    },
    button: {
        backgroundColor: 'white', // 버튼 배경색상
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 100,
        marginBottom: 15,
        shadowColor: "#000", // 버튼 그림자
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        flexDirection: 'row',

    },
    buttonText: { //버튼 텍스트
        color: 'black',
        fontSize: 15,
        fontWeight: 'bold',
    },
    myText: { // 전동 휠체어 사용 베프 텍스트
        color: 'black',
        fontSize: 13,
        letterSpacing: 1,
    },
    premiumButton: {
        backgroundColor: '#F9A596', // 버튼 배경색상
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 100,
        marginBottom: 20,
        shadowColor: "#000", // 버튼 그림자
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        alignItems: 'center',
    },
    premiumbButtonText: {
        color: 'white',
        fontSize: 15,
    },
    premiumText: {
        color: '#4EC3FF',
        fontSize: 12,
        fontWeight: 'bold',
        marginLeft: 5,
    },
    aiText: {
        color: '#19BAFF',
        fontSize: 15,
        fontWeight: 'bold',
        marginRight: 3,
    },
    premiumImage: {
        width: 15,
        height: 15,
        marginRight: 4,
    },
    myImage: {
        width: 70,
        height: 70,
        marginBottom: 5,
        padding: 20,
        borderWidth: 1,
        borderColor: 'lightgray',
        borderRadius: 50,
    },
    username: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20,
    },
});

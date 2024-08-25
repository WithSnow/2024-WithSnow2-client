import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        margin: 15,
        justifyContent: 'flex-start',
        marginBottom: 100,
    },

    topProfileButton: {
        height: '50%',
        backgroundColor: 'white',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 20,
        // margin: 15,
        marginBottom: 10,
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
    profileNameText: {
        flexDirection: 'row',
        alignItems: 'center',
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
    myText: { // 전동 휠체어 사용 베프 텍스트
        color: 'black',
        fontSize: 13,
        letterSpacing: 1,
    },
    usernameText: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20,
    },
    usernameContainer: {
        marginHorizontal: 15,
        flexDirection: 'column',
        alignItems: 'center',
    },
    // 사용자 기본 정보
    profileButton: {
        width: 240,
        backgroundColor: '#FFF4F4',
        borderRadius: 100,
        marginTop: 8,
        flexDirection: 'row',
        alignItems: 'center',


    },
    profileText: {
        color: 'black',
        fontSize: 12,
        marginLeft: 6,
    },
    // 사용자 기본 정보 카테고리
    profileCategoryButton: {
        width: 76,
        backgroundColor: 'white',
        paddingVertical: 5,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: '#F9A596',
        alignItems: 'center',
    },
    profileCategoryButtonText: {
        color: '#F9A596',
        fontSize: 13,
    },
    // 프로필 수정 버튼
    profileEditButton: {
        width: 100,
        backgroundColor: 'white',
        paddingVertical: 5,
        borderRadius: 100,
        borderWidth: 1,
        marginTop: 20,
        borderColor: '#F9A596',
        alignItems: 'center',
    },
    profileEditButtonText: {
        color: '#F9A596',
        fontSize: 10,
    },
    // 사용자 선택 버튼
    bottomContainer: {
        flex: 1,
        flexDirection: 'column',
    },

    bottomUserButton: {
        height: 100,
        backgroundColor: 'white',
        paddingVertical: 20,
        paddingLeft: 40,
        borderRadius: 20,
        marginTop: 20,
        //marginBottom: 12,
        //margin: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        flexDirection: 'row',
        alignItems: 'center',
    },
    selectionImage: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
    },
    selectionText: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 16,
        marginLeft: 12,
    },
    activeTab: {
        borderColor: '#F9A596',
        borderWidth: 1,
        height: 100,
        backgroundColor: 'white',
        paddingVertical: 20,
        paddingLeft: 40,
        borderRadius: 20,
        marginTop: 20,
        //marginBottom: 12,
        //margin: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        flexDirection: 'row',
        alignItems: 'center',
    }
})
import { StyleSheet, Dimensions } from 'react-native';
const deviceHeight = Dimensions.get('window').height;

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    dropdown: {
        margin: 40,
        marginTop: 10,
        justifyContent: 'space-evenly',
        height: deviceHeight / 2,
        alignItems: "center"
    },
    image: {
        width: '100%',
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
    },
    text: {
        left: 20,
        fontSize: 13,
        color: 'white',
        position: 'absolute',
        bottom: 60,
    },
    icon: {
        alignSelf: "flex-start",
        bottom: 20,
        left: 10
    }
})
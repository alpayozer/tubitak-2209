import { StyleSheet, Dimensions } from 'react-native';

const deviceWidth = Dimensions.get("screen").width;

export default StyleSheet.create({
    container: {
        backgroundColor: "white",
        flex: 1
    },
    image: {
        width: deviceWidth,
        borderBottomLeftRadius: 60,
        borderBottomRightRadius: 60,
    },
    input: {
        marginTop: 20,
    }
})
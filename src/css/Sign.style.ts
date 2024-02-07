import { StyleSheet, Dimensions } from 'react-native';

const deviceWidth = Dimensions.get("screen").width;

export default StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor:"red",

    },
    image: {
        width: deviceWidth,
        //height:deviceWidth*0.5,
        //resizeMode:"contain",
        borderBottomLeftRadius: 70,
        borderBottomRightRadius: 70,
    },
    input: {
        marginTop: 20,
    }
})
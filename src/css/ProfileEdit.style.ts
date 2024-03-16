import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor:"red"
        backgroundColor: "white"
    },
    input_container: {
        marginTop: 20,
    },
    icon_logout: {
        position: "absolute",
        top: 20,
        right: 5,
    },
    icon_back: {
        position: "absolute",
        top: 20,
        left: 5,
    },
    input_group: {
        flexDirection: "row",
        justifyContent: "space-around",
    }

})
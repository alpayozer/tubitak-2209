import { StyleSheet, Dimensions } from 'react-native';

const deviceWidth = Dimensions.get("screen").width;

export default StyleSheet.create({
    container: {
        backgroundColor: "white",
        flex: 1,
    },
    inner_container: {
        marginLeft: 15
    },
    image: {
        alignSelf: "flex-end",
        margin: 30,
    },
    title: {
        fontSize: 15,
        color: "black",
        fontWeight: "bold",
    },
    inner_text: {
        fontSize: 12,
        color: "black",
        marginTop: 10,
        marginRight: 30
    },
    button_view: {
        flexDirection: "row",
        marginTop: 80,
    },
    list_view: {
        marginTop: 50,
    }

})
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    header_card: {
        // backgroundColor:"red",
        margin: 30,
        marginTop: 50,
        borderWidth: 1,
        borderStyle: "dashed",
        padding: 10,
        paddingLeft: 20
    },
    header_card_title: {
        fontSize: 15,
        fontWeight: "bold",
        color: "black"
    },
    header_card_text: {
        fontSize: 13,
        color: "black",
        marginTop: 10
    },
    icon: {
        alignSelf: "flex-end",
        position: "absolute",
        top: -15,
        right: -15,
        resizeMode: "contain"
    },
    dropdown: {
        marginTop: 20,
        flexDirection: "row",
        justifyContent: "space-around"
    },
    doctorCard: {
        margin: 20,
        marginTop: 40
    }
})
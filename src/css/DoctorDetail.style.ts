import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        backgroundColor: "white",
        flex: 1
    },
    name_container: {
        alignItems: "center",
    },
    name: {
        fontSize: 18,
        color: "black",
        fontWeight: "bold",
        marginBottom: 10
    },
    hospital: {
        fontSize: 13,
        opacity: 0.8,
        color: "black"

    },
    about_container: {
        borderWidth: 1,
        borderStyle: "dashed",
        borderColor: "black",
        margin: 20,
        padding: 10

    },
    about: {
        fontSize: 15,
        color: "black",
    },
    about_title: {
        fontSize: 16,
        color: "black",
        fontWeight: "800",
        marginBottom: 15
    },
    calendar: {
        height: 300,
        width: "100%",
        backgroundColor: "#72BAF5",
        alignItems: "center",
        justifyContent: "center",
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 100,
        marginBottom: 30
    },
    monster: {
        width: 35,
        height: 35,
        alignSelf: "flex-end",
        top: 25,
        left: 25
    }
})
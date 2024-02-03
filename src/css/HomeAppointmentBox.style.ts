import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        margin: 5,
        borderWidth: 1,
        borderColor: "#F1F1F1",
        borderRadius: 10,
        width: 180,
        //height: 110
        backgroundColor: "white"
    },
    image: {
        width: 40,
        height: 40,
        borderRadius: 50,
    },
    date: {
        fontSize: 13,
        color: "#0F6BE9",
    },
    time: {
        fontSize: 13,
        color: "#0F6BE9",

    },
    inner_container: {
        flexDirection: "row",
        backgroundColor: 'rgba(15, 107, 233, 0.15)',
        borderRadius: 3,
        alignItems: "center",
        justifyContent: "space-between",
        borderWidth: 1,
        borderColor: "#0F6BE9",
        padding: 5,
        width: 100,
    },
    top_container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        padding: 5,
    },
    name: {
        fontSize: 15,
        color: "black"
    },
    hospital: {
        fontSize: 12,
        color: 'rgba(0, 0, 0, 0.5)'
    },
    button: {
        fontSize: 13,
        color: "white"
    },
    button_container: {
        backgroundColor: "#0F6BE9",
        justifyContent: "center",
        alignItems: "center",
        height: 30,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    text_container: {
        paddingLeft: 15,
        paddingTop: 10,
        paddingBottom: 15
    }
})
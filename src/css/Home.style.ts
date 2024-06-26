import { StyleSheet } from 'react-native';


export default StyleSheet.create({
    container: {
        backgroundColor: "white",
        flex: 1

    },
    icon: {
        width: 15,
        height: 15,
    },
    title: {
        fontSize: 15,
        color: "black",
        marginLeft: 10,
        fontWeight: "600"
    },
    appointment_box: {
        flexDirection: "row",
        alignItems: "center",
        margin: 20,
    },
    calendar_box: {
        flexDirection: "row",
        alignItems: "center",
        margin: 20,
        marginTop: 60,
        marginBottom: 140
    },
    welcome: {
        fontSize: 15,
        color: "#0F6BE9",
        paddingTop: 30,

    },
    prescription: {
        fontSize: 14,
        color: "#0F6BE9",
    },
    image: {
        height: 80,
        width: 80,
        borderRadius: 50,
    },
    top_container: {
        borderWidth: 1,
        borderColor: "#0F6BE9",
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        alignItems: "center",
        backgroundColor: 'rgba(15, 107, 233, 0.15)'
    },
    image_container: {
        backgroundColor: "white",
        width: 90,
        height: 90,
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        top: 40,
    },
    appointment_list: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        marginTop: 20,
    }


})
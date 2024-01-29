import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    body: {
        backgroundColor: "white",
        flexDirection: "row",
        // backgroundColor:"red",
        borderColor: "#F1F1F1",
        borderWidth: 1,
        margin: 20,
        marginTop: 5,
        padding: 10,
        borderRadius: 10
    },
    content: {
        marginLeft: 20,
        justifyContent: "space-between"
    },
    image: {
        width: 64,
        height: 64,
    },
    name: {
        color: "black"
    },
    info: {
        color: "black"

    },
    date: {
        color: "#0F6BE9"
    }
})
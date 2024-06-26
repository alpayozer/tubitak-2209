import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    header: {
        backgroundColor: "#72BAF5",
        height: 100,
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40
    },
    headerText: {
        color: "white",
        margin: 15
    },
    card: {
        marginTop: 50
    },
    date: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginHorizontal: 20
    },
    image: {
        width: 37,
        height: 37
    },
})
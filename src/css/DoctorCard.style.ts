import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        borderTopWidth: 1,
        borderBottomWidth: 1,
        padding: 20,
        borderColor: "#E0E0E0"
    },
    text_container: {
        marginLeft: 30,
        justifyContent: "center",
        marginRight: 30
    },
    image: {
        width: 40,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 8
    },
    name: {
        fontSize: 15,
        color: "black"
    },
    hospital: {
        fontSize: 13,
        color: "black"
    }

})
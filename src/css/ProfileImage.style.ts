import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        alignItems: "center",
        backgroundColor: "#72BAF5"
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 100,
    },
    image_container: {
        width: 180,
        height: 180,
        backgroundColor: "white",
        borderRadius: 100,
        alignItems: "center",
        justifyContent: "center",
        top: 20
    },
    text: {
        textAlign: "center",
        fontSize: 20,
        fontWeight: "600",
        marginTop: 20,
        color: "black",
    },
    description: {
        backgroundColor: "#72BAF5",
        height: 200,
        justifyContent: "center",
        alignItems: "center",
    },
    inner_description: {
        width: 350,
        marginTop: 50,
        borderWidth: 1,
        borderColor: "black",
        borderStyle: "dashed"
    },
    description_title: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
        margin: 10
    },
    description_subtitle: {
        fontSize: 15,
        color: "white",
        margin: 10
    },
    description_icon: {
        alignSelf: "flex-end",
        top: 10,
        left: 10
    },

})
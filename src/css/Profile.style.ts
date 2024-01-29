import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor:"red"
        backgroundColor: "white"
    },
    profile_edit: {
        alignItems: "center",
        // borderWidth:1,
        // borderColor:"black",
        //width:100,
        marginTop: 20,
        //width:200,
        //backgroundColor:"red"
    },
    button: {
        //backgroundColor:"blue",
        margin: 10,
        flexDirection: "row",
    },
    text: {
        color: "black",
        marginLeft: 10
    },
    infoCard: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 30,
    },
    text_icon: {
        width: 20,
        height: 20,
        resizeMode: "contain"
    },
    exercisesCard: {
        alignItems: "center",
    },
    exercisesCard_text: {
        //margin:30,
        fontSize: 15,
        fontWeight: "bold",
        color: "black"
    },
    daily_exercises: {
        flexDirection: "row",
        margin: 20
    },
    daily_icon: {
        width: 20,
        height: 20,
    }

})
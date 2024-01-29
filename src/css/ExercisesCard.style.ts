import { StyleSheet } from 'react-native';

const base_style = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderStyle: "dashed",
        borderRadius: 10,
        width: 300,
        marginTop: 10,
    },
    text: {
        textAlign: "center",
        fontSize: 20,
        padding: 10,
    }
})

export default {
    blue: StyleSheet.create({
        ...base_style,
        container: {
            ...base_style.container,
            backgroundColor: "#E1F5FE",
            borderColor: "#0F6BE9",

        },
        text: {
            ...base_style.text,
            color: "#0F6BE9"
        }
    }),
    orange: StyleSheet.create({
        ...base_style,
        container: {
            ...base_style.container,
            backgroundColor: "#FFF3E0",
            borderColor: "#FFA000",

        },
        text: {
            ...base_style.text,
            color: "#FFA000"
        }
    })

}
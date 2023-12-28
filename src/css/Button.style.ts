import { StyleSheet } from 'react-native';

const base_style = StyleSheet.create({
    container: {
        alignItems: "center"
    },

    inner_container: {
        backgroundColor: "#0F6BE9",
        borderRadius: 10,
        padding: 10,
        margin: 10,
    },
    button_container: {
        alignItems: "center",
    },
    title: {
        color: "white"
    }
})

export default {
    login: StyleSheet.create({
        ...base_style,
        inner_container: {
            ...base_style.inner_container,
            width: 250
        }
    }),
    randevu_al: StyleSheet.create({
        ...base_style,
        inner_container: {
            ...base_style.inner_container,
            width: 90,
            height: 30,
            padding: 4,
            borderRadius: 5,
        },
    })
}
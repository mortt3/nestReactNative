import { StyleSheet } from "react-native";
import { Color } from "../constants/color";

export const globalStyles = StyleSheet.create({
    card: {
        backgroundColor: Color.background,
        borderRadius: 15,
        padding: 15,
        margin: 10,
        borderWidth: 1,
        borderColor: Color.primary,
    },
    title: {
        fontSize: 18,
        fontWeight: '700',
        color: Color.textPrimary,
        fontFamily: 'DancingScript', 
    },
    date: {
        fontSize: 14,
        color: Color.textSecondary,
        fontFamily: 'DancingScript',
        marginBottom: 10,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        width: 100,
        height: 80,
        borderRadius: 12,
        marginRight: 15,
    },
    details: {
        flex: 1,
    },
    info: {
        fontSize: 14,
        color: Color.textPrimary,
        fontFamily: 'DancingScript',
    }
});
// para modo oscuro usaremos un contextos
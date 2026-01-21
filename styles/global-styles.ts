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
    },
    headerSearch: {
        backgroundColor: '#eee',
        paddingHorizontal: 10,
        borderRadius: 8,
        width: 160,
        height: 36,
        marginRight: 10, 
    },
    icon: {
        width: 26,              
        textAlign: 'center',    
        fontSize: 18,          
        marginRight: 6,
    },

});
// para modo oscuro usaremos un contextos
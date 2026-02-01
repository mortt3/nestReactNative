import { StyleSheet } from "react-native";

export const createGlobalStyles = (colors: any) =>
    StyleSheet.create({
        card: {
            backgroundColor: colors.surface,
            borderRadius: 15,
            padding: 15,
            margin: 10,
            borderWidth: 1,
            borderColor: colors.primary,
        },
        title: {
            fontSize: 18,
            fontWeight: '700',
            color: colors.textPrimary,
            fontFamily: 'Roboto',
        },
        date: {
            fontSize: 14,
            color: colors.textSecondary,
            fontFamily: 'Roboto',
            marginBottom: 10,
        },
        textSetting: {
            fontSize: 14,
            color: colors.textSecondary,
            fontFamily: 'Roboto',
            marginLeft: 10,
            marginTop: 10
        },
        textVersion: {
            fontSize: 14,
            color: colors.textSecondary,
            fontFamily: 'Roboto',
            textAlign:'center',
            marginTop: 10,
    
        },
        row: {
            flexDirection: 'row',
            alignItems: 'center',
        },
         column: {
            flexDirection: 'column',
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
            color: colors.textPrimary,
            fontFamily: 'Roboto',
        },
        headerSearch: {
            backgroundColor: colors.surface,
            paddingHorizontal: 10,
            borderRadius: 8,
            width: 160,
            height: 36,
            marginRight: 10,
            color: colors.textPrimary,
        },
       
        checkbox: {
            marginVertical: 2.5,
        },
         imagePerfil: {
            width: 60,
            height: 60,
            borderRadius: 100,
            marginRight: 15,
        },
        icon: {
            width: 26,
            textAlign: 'center',
            fontSize: 18,
            marginRight: 6,
        },
        iconArrowSetting: {
            marginLeft: 'auto',
            alignSelf: 'center',
        },
        iconSetting: {
            marginRight: 10
        },

    });

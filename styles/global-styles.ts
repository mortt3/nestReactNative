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
        icon: {
            width: 26,
            textAlign: 'center',
            fontSize: 18,
            marginRight: 6,
        },
        checkbox: {
            marginVertical: 2.5,
        },
    });

import { NOTAS_DATA } from "@/constants/data";
import { useTheme } from "@/context/themeContext";
import { createGlobalStyles } from "@/styles/global-styles";
import { Stack, useLocalSearchParams } from "expo-router";
import { Image, Text, View } from "react-native";
import CheckboxRow from "../components/CheckboxRow";


export default function ExpandedNote() {
    const { id } = useLocalSearchParams();
    const { colors } = useTheme();
    const globalStyles = createGlobalStyles(colors);

    const nota = NOTAS_DATA.find(n => n.id.toString() === id);
    const screenTopOptions = { title: '', headerStyle: { backgroundColor: colors.background }, headerShadowVisible: false, headerTintColor: colors.textPrimary, contentStyle: { backgroundColor: colors.background }, };
    if (!nota) {
        return (
            <View >
                <Text style={{ color: colors.textPrimary }}>Nota no encontrada</Text>
            </View>
        );
    }

    if (nota.imageUrl) {
        return (
            <View style={{ flex: 1, backgroundColor: colors.background }}>
                <Stack.Screen options={screenTopOptions} />
                <View style={globalStyles.expandedCard}>
                    <Image source={nota.imageUrl} style={globalStyles.expandedImage} />

                    <Text style={globalStyles.expandedTitle}>{nota.title}</Text>
                    <Text style={globalStyles.date}>{nota.date}</Text>

                    <View style={globalStyles.metaRow}>
                        <Text style={globalStyles.metaItem}>Tiempo: {nota.time}</Text>
                        <Text style={globalStyles.metaItem}>Dificultad: {nota.difficulty}</Text>
                    </View>

                </View>
            </View>
        );
    }

    if (nota.iconList) {
        return (
            <View style={{ flex: 1, backgroundColor: colors.background }}>
                <Stack.Screen options={screenTopOptions} />
                <View style={globalStyles.expandedCard}>
                    <Text style={globalStyles.expandedTitle}>{nota.title}</Text>
                    <Text style={globalStyles.date}>{nota.date}</Text>
                    <View style={globalStyles.details}>
                        {nota.iconList?.map(item => (
                            <View key={item.id} style={globalStyles.row}>
                                <Text style={globalStyles.icon}>{item.icon}</Text>
                                <Text style={globalStyles.info}>{item.text}</Text>
                            </View>
                        ))}
                    </View>
                </View>
            </View>
        );
    }

    if (nota.list) {
        return (
            <View style={{ flex: 1, backgroundColor: colors.background }}>
                <Stack.Screen options={screenTopOptions} />

                <View style={globalStyles.expandedCard}>
                    <Text style={globalStyles.expandedTitle}>{nota.title}</Text>
                    <Text style={globalStyles.date}>{nota.date}</Text>
                    <View style={globalStyles.row}>
                        <View style={globalStyles.details}>
                            {nota.list?.map(item => (
                                <View key={item.id} style={globalStyles.checkbox}>
                                    <CheckboxRow item={item} />
                                </View>
                            ))}
                        </View>
                    </View>
                </View>
            </View>
        );
    }


    return (
        <View style={{ flex: 1, backgroundColor: colors.background }}>
            <Stack.Screen options={screenTopOptions} />
            <View style={globalStyles.expandedCard}>
                <Text style={globalStyles.expandedTitle}>{nota.title}</Text>
                <Text style={globalStyles.date}>{nota.date}</Text>
                <View style={globalStyles.details}>
                    <Text style={globalStyles.info}>{nota.text}</Text>
                </View>
            </View>
        </View>

    );
}




import { useTheme } from "@/context/themeContext";
import { Image, Text, View } from "react-native";
import { createGlobalStyles } from "../styles/global-styles";
import CheckboxRow from "./CheckboxRow";

interface ListItem {
    id: number;
    checkBox: boolean;
    text: string;
}
interface IconListItem {
    id: number;
    icon: string;
    text: string;
}

interface Note {
    type: number;
    id: number;
    title: string;
    date: string;
    time?: string;
    difficulty?: string;
    text?: string;
    imageUrl?: number;
    list?: ListItem[];
    iconList?: IconListItem[];
}

//tipo 1: hogar; tipo 2: recetas; tipo 3: listas; tipo 4: Notas personales; 
export default function Notes({ type, title, date, time, difficulty, text, imageUrl, list, iconList }: Note) {
    const { colors } = useTheme();
    const globalStyles = createGlobalStyles(colors);
    if (type == 1) {
        return (
            <View style={globalStyles.card}>
                <Text style={globalStyles.title}>{title}</Text>
                <Text style={globalStyles.date}>{date}</Text>
                <View style={globalStyles.row}>
                    <View style={globalStyles.details}>
                        <View style={globalStyles.details}>
                            {iconList?.map(item => (
                                <View key={item.id} style={globalStyles.row}>
                                    <Text style={globalStyles.icon}>{item.icon}</Text>
                                    <Text style={globalStyles.info}>{item.text}</Text>
                                </View>
                            ))}

                        </View>
                    </View>
                </View>
            </View>
        );
    }

    if (type == 2) {
        return (
            <View style={globalStyles.card}>
                <Text style={globalStyles.title}>{title}</Text>
                <Text style={globalStyles.date}>{date}</Text>
                <View style={globalStyles.row}>
                    <Image source={imageUrl} style={globalStyles.image} />
                    <View style={globalStyles.details}>
                        <Text style={globalStyles.info}>Tiempo: {time}</Text>
                        <Text style={globalStyles.info}>Dificultad: {difficulty}</Text>
                        <Text style={globalStyles.info}>{text}</Text>
                    </View>
                </View>
            </View>
        );
    }

    if (type == 3) {
        return (
            <View style={globalStyles.card}>
                <Text style={globalStyles.title}>{title}</Text>
                <Text style={globalStyles.date}>{date}</Text>

                <View style={globalStyles.row}>
                    <View style={globalStyles.details}>

                        {list?.map(item => (
                            <View key={item.id} style={globalStyles.checkbox}>
                                <CheckboxRow item={item} />
                            </View>
                        ))}

                    </View>
                </View>
            </View>
        );
    }
    if (type == 4) {
        return (
            <View style={globalStyles.card}>
                <Text style={globalStyles.title}>{title}</Text>
                <Text style={globalStyles.date}>{date}</Text>
                <View style={globalStyles.row}>
                    <View style={globalStyles.details}>
                        <Text style={globalStyles.info}>{text}</Text>
                    </View>
                </View>
            </View>
        );
    }


    return (
        <View style={globalStyles.card}>
            <Text style={globalStyles.title}>{title}</Text>
            <Text style={globalStyles.date}>{date}</Text>
            <View style={globalStyles.row}>
                <View style={globalStyles.details}>
                    <Text style={globalStyles.info}>Tiempo: {time}</Text>
                    <Text style={globalStyles.info}>Dificultad: {difficulty}</Text>
                    <Text style={globalStyles.info}>{text}</Text>
                </View>
            </View>
        </View>
    );
}
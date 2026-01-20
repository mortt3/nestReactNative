import { Image, Text, View } from "react-native";
import { globalStyles } from "../styles/global-styles"; // Ajusta la ruta

interface Note {
    id: number;
    title: string;
    date: string;
    time?: string;
    difficulty?: string;
    text?: string;
    imageUrl?: string;
}

export default function Notes({ id, title, date, time, difficulty, text, imageUrl }: Note) {

    if (imageUrl) {
        return (
            <View style={globalStyles.card}>
                <Text style={globalStyles.title}>{title}</Text>
                <Text style={globalStyles.date}>{date}</Text>
                
                <View style={globalStyles.row}>
                    <Image source={require(imageUrl)} style={globalStyles.image} />
                    <View style={globalStyles.details}>
                        <Text style={globalStyles.info}>Tiempo: {time}</Text>
                        <Text style={globalStyles.info}>Dificultad: {difficulty}</Text>
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
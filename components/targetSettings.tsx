import { useTheme } from "@/context/themeContext";
import { createGlobalStyles } from "@/styles/global-styles";
import { MaterialIcons } from '@expo/vector-icons';
import { Image, Pressable, Text, View } from "react-native";

interface listTarget{
    type: number;
    id: number;
    imagen?: number;
    texto:string;
    userName?: String;
    icono?:any
    onPress?: () => void;

}
export default function TargetSetting({id,imagen,texto, userName,icono,onPress}:listTarget){
    const themeData = useTheme();
    const colors = themeData.colors;
    const globalStyles = createGlobalStyles(colors);
    if( !imagen && !userName ){
        return(
            <Pressable onPress={onPress} >
                <View style={globalStyles.card}>
                    <View style={globalStyles.row}>
                        <MaterialIcons  style={globalStyles.iconSetting} name={icono} size={24} color={colors.textSecondary}/>
                        <Text style={globalStyles.title}>{texto}</Text>
                        <MaterialIcons style={globalStyles.iconArrowSetting} name="chevron-right" size={24} color={colors.textSecondary}/>
                    </View>
                </View>
            </Pressable>
            )
    }
    return(
            <View style={globalStyles.card}>
                <View style={globalStyles.row}>
                    <Image source={imagen} style={globalStyles.imagePerfil}/>
                    <View style={globalStyles.column}>
                        <Text style={globalStyles.title}>{texto}</Text>
                        <Text style={globalStyles.info}>{userName}</Text>
                    </View>
                    <MaterialIcons style={globalStyles.iconArrowSetting} name="chevron-right" size={24} color={colors.textSecondary}/>
                </View>
            </View>

    )
    
}
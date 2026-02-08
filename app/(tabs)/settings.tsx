import TargetSetting from '@/components/targetSettings';
import { useTheme } from '@/context/themeContext';
import { createGlobalStyles } from '@/styles/global-styles';
import { router } from "expo-router";
import { Text, View } from 'react-native';
import versionJson from '../../package.json';


export default function Settings() {
  const { colors } = useTheme();
  const globalStyles = createGlobalStyles(colors);

  return (
      <View style={{ flex: 1, backgroundColor: colors.background }}>
        <View style={{ flex: 1 }}>
          <TargetSetting type={0} id={0} imagen={require("../../assets/images/perfil.jpg")} texto={'Perfil'} userName={'Jorge'}/>
          <Text style = {globalStyles.textSetting}>AJUSTES</Text>
          <TargetSetting type={1} id={1}  texto={'Privacidad'} icono={"privacy-tip"}/>
          <TargetSetting onPress={()=> router.push('/modeDark')} type={1} id={1}  texto={'Tema'} icono={"brightness-6"}/>
        </View>
        <Text style = {globalStyles.textVersion}>Version {versionJson.version}</Text>
      </View>
    );
}
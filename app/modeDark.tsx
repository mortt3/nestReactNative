import { useTheme } from '@/context/themeContext';
import { createGlobalStyles } from '@/styles/global-styles';
import { Stack } from 'expo-router';
import React from 'react';
import { Switch, Text, View } from 'react-native';

export default function Home() {
  const { colors, theme, toggleTheme } = useTheme();
  const globalStyles = createGlobalStyles(colors);
  
  return (
    <View style={globalStyles.card}>
      <Stack.Screen options={{title:'Tema',headerStyle:{backgroundColor:colors.background }, headerTintColor:colors.textPrimary,contentStyle:{backgroundColor: colors.background } }}/>
      <View style={globalStyles.row}>
        <Text style={globalStyles.info}>Modo Claro/Oscuro</Text>
         <Switch
          trackColor={{ false: '#505050', true: colors.primary }}
          thumbColor={'#ffffff'}
          onValueChange={toggleTheme} 
          value={theme === 'dark'}
          style={globalStyles.iconArrowSetting}
        />

        </View>
    </View>
    );
  }
  


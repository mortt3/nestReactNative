import { useTheme } from '@/context/themeContext';
import { createGlobalStyles } from '@/styles/global-styles';
import { Stack } from 'expo-router';
import React, { useState } from 'react';
import { Switch, View } from 'react-native';

export default function Home() {
  const { colors } = useTheme();
  const globalStyles = createGlobalStyles(colors)

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View style={globalStyles.card}>
      <Stack.Screen options={{title:'Tema',headerStyle:{backgroundColor:colors.background }, headerTintColor:colors.textPrimary,contentStyle:{backgroundColor: colors.background } }}/>
      <View style={globalStyles.row}>
        <text style={globalStyles.info}>Modo Claro/Oscuro</text>
         <Switch
          trackColor={{ false: '#505050', true: colors.primary }}
          thumbColor={isEnabled ? '#ffffff' : '#ffffff'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
          style={globalStyles.iconArrowSetting}
        />

        </View>
    </View>
    );
  }



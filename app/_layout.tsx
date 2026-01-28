import { useFonts } from 'expo-font';
import { Stack } from "expo-router";
import React from 'react';
import { ThemeProvider } from '../context/themeContext';
export default function RootLayout() {
  const [loaded] = useFonts({
    Roboto: require("../assets/fonts/Roboto-VariableFont_wdth,wght.ttf")
  });

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </ThemeProvider>
  );
}
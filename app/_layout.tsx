import { useFonts } from 'expo-font';
import { Stack } from "expo-router";


export default function RootLayout() {
  const [loaded] = useFonts({
    DancingScript: require("../assets/fonts/Roboto-VariableFont_wdth,wght.ttf")
  });

  if (!loaded) {
    return null;
  }

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} /> {/* el headerShown es para mostrar o no mostrar lo de arriba del todo  */}
    </Stack>
  );
}

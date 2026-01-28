import { useTheme } from '@/context/themeContext';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';

export default function RootLayout() {
  const { colors } = useTheme();
  return (
    <Tabs screenOptions={{
      tabBarActiveTintColor: colors.textPrimary,
      tabBarStyle: {
        backgroundColor: colors.background,
        borderTopColor: colors.background,
      },
      headerStyle: {
        backgroundColor: colors.background,
        borderBottomColor: colors.background,
      },
      headerTintColor: colors.textPrimary,
    }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="list"
        options={{
          title: 'Notas',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="sticky-note" color={color} />,
        }}
      />
      <Tabs.Screen
        name="calendar"
        options={{
          title: 'Calendario',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name='calendar-o' color={color} />,
        }}
      />
      <Tabs.Screen
        name="finance"
        options={{
          title: 'Finanzas',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="dollar" color={color} />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="user" color={color} />,
        }}
      />
    </Tabs>
  );
}

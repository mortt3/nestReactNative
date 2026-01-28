import React, { createContext, useContext } from "react";
import { useColorScheme } from "react-native";
import { themes } from "../constants/color"; // Asegúrate de que el nombre coincida

export const ThemeContext = createContext({
    theme: 'light' as 'light' | 'dark',
    colors: themes.light,
    toggleTheme: () => { },
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const systemColorScheme = useColorScheme();

    const theme: 'light' | 'dark' =
        systemColorScheme === 'dark' ? 'dark' : 'light';

    return (
        <ThemeContext.Provider
            value={{
                theme,
                colors: themes[theme],
                toggleTheme: () => { },
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
};


export const useTheme = () => useContext(ThemeContext);
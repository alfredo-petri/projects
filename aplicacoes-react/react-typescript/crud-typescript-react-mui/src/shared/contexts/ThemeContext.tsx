import { Box, ThemeProvider } from '@mui/material';
import { createContext, useCallback, useContext, useMemo, useState } from 'react';
import { LightTheme, DarkTheme } from '../themes';

interface IThemeContextData {
    themeName: 'LightTheme' | 'DarkTheme';
    toggleTheme: () => void;
}

interface IAppThemeProviderProps {
    children: React.ReactNode
}

const ThemeContext = createContext({} as IThemeContextData);

export const useAppThemeContext = () => { 
    return useContext (ThemeContext)
 }

export const AppThemeProvider: React.FC<IAppThemeProviderProps> =  ({children}) => {

    const [themeName, setThemeName] = useState<'LightTheme' | 'DarkTheme'>('LightTheme')
    const toggleTheme = useCallback(() => { 
        setThemeName(oldThemeName => oldThemeName === "LightTheme"? "DarkTheme" : "LightTheme")
     }, [])

    const theme = useMemo(() => { 
        if (themeName === "LightTheme") return LightTheme
        return DarkTheme
     }, [themeName])
    
    return (
        <ThemeContext.Provider value={{themeName, toggleTheme }}>
            <ThemeProvider theme={theme}>
                <Box width="100vw" height="100vh" bgcolor={theme.palette.background.default} >
                    {children}
                </Box>
            </ThemeProvider>
        </ThemeContext.Provider>  
    )

}
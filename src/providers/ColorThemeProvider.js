import React, { useState } from "react"
import themes, { defaultTheme, themeDefaultValues } from "config/themes"
import { getConsentPreferences } from "config/storage"
import { StyledComponentsThemeProvider } from "./StyledComponentsThemeProvider"
import { useContext } from "react"

const chosenTheme = (name) => {
    return {
        ...themeDefaultValues, 
        text: themes[name]?.primary,
        ...themes[name]
    }
}

export const ThemeContext = React.createContext({
    themeColor: defaultTheme,
    setThemeColor: () => {}
});

export const ColorThemeProvider = ({children}) => {
    
    const storedThemeColor = getConsentPreferences().theme;
    const [themeColor, setThemeColor] = useState(storedThemeColor || defaultTheme);

    return (
        <ThemeContext.Provider value={{themeColor, setThemeColor}}>
            <StyledComponentsThemeProvider theme={chosenTheme(themeColor)}>
                {children}
            </StyledComponentsThemeProvider>
        </ThemeContext.Provider>
    )
}

export const useColorTheme = () => {
    
    const {setThemeColor, themeColor} = useContext(ThemeContext);

    return [themeColor, setThemeColor];
}
import { useState } from "react"
import { ThemeProvider } from "styled-components"
import themes from "config/themes"
import { ThemeContext } from "config/context"
import { getConsentPreferences } from "config/storage"

const defaultValues = {
    background: '#333'
}

const chosenTheme = (name) => {
    return {
        ...defaultValues, 
        text: themes[name].primary, 
        ...themes[name]
    }
}

const ThemeWrapper = ({children}) => {
    
    const storedThemeColor = getConsentPreferences().theme;
    const [themeColor, setThemeColor] = useState(storedThemeColor || 'orange');
    
    return (
        <ThemeContext.Provider value={{themeColor, setThemeColor}}>
            <ThemeProvider theme={chosenTheme(themeColor)}>
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    )
}

export default ThemeWrapper;
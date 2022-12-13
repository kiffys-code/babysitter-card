import { Children, useState } from "react"
import { ThemeProvider } from "styled-components"
import App from "routes/Root"
import themes from "config/themes"

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
    
    const [currentTheme, setCurrentTheme] = useState('purple');
    
    return (
        <ThemeProvider theme={chosenTheme(currentTheme)}>
            {/* <App {...{setCurrentTheme}}/> */}
            {children}
        </ThemeProvider>
    )
}

export default ThemeWrapper;
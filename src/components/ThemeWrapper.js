import { useState } from "react"
import { ThemeProvider } from "styled-components"
import App from "./App"
import themes from "./themes"

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

const ThemeWrapper = () => {
    
    const [currentTheme, setCurrentTheme] = useState('blue');
    
    return (
        <ThemeProvider theme={chosenTheme(currentTheme)}>
            <App {...{setCurrentTheme}}/>
        </ThemeProvider>
    )
}

export default ThemeWrapper;
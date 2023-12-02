import React from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

    @font-face {
        font-family: AyeshaDisplay;
        src: url(${require('assets/font/AyeshaDisplay-axnq5.ttf')});
    }

    @font-face {
        font-family: OpenDyslexic;
        src: url(${require('assets/font/OpenDyslexic-Regular.otf')});
    }

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        color: #fff;
        text-shadow: black 0px 0px 1px, black 0px 0px 1px, black 0px 0px 1px, black 0px 0px 1px;
        font-family: OpenDyslexic, Verdana, sans-serif;
    }

    a, a:visited {
        color: none;
    }

    h1, h2, h3 {
        font-weight: normal;
    }

    body {
        background-color: #333;
    }

    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
    }

`;

export const StyledComponentsThemeProvider = ({children, theme, ...props}) => {
    return (
        <ThemeProvider theme={theme} {...props}>
            <GlobalStyles />
            {children}
        </ThemeProvider>
    )
}
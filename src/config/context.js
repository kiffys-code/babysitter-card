import React from "react";

export const ThemeContext = React.createContext({
    themeColor: 'purple',
    setThemeColor: () => {}
});
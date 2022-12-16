import React from "react";
import { defaultTheme } from "./themes";

export const ThemeContext = React.createContext({
    themeColor: defaultTheme,
    setThemeColor: () => {}
});
import {createContext, useState} from "react";

export const ThemeContext = createContext({isDarkMode: false});

export default function ThemeProvider({children}) {
    const [isDarkMode, setIsDarkMode] = useState(false);
    //const value = useMemo(() => ({isDarkMode, setIsDarkMode}), [isDarkMode]);
    return (<ThemeContext.Provider value={{isDarkMode, setIsDarkMode}}>
        {children}
    </ThemeContext.Provider>);
}
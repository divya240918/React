import { createContext, useContext } from "react";

export const ThemeContext = createContext({  //contextAPI: global storage
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {},
})

export const ThemeProvider = ThemeContext.Provider
//custom hooks
export default function useTheme() {  //custom hook: just to wrap useContext to make the code reusable
    return useContext(ThemeContext)
}
import React,{useContext,useState,createContext, useEffect} from "react";

const ThemeContext=createContext()

export const useTheme=()=>useContext(ThemeContext);


export const ThemeProvider=({children})=>{
    // const [temp,settemp]=useState(false)
    const [isDarkMode,setisDarkMode]=useState(()=>{
        const savedTheme=localStorage.getItem("darkMode");
        return savedTheme ? JSON.parse(savedTheme):false;
    })

    const toggoleTheme=()=>{
        setisDarkMode(preMode=>!preMode),
        settemp(!temp)

    }
    useEffect(()=>{
        localStorage.setItem("darkMode",JSON.stringify(isDarkMode));
    },[isDarkMode])

    return(
        <ThemeContext.Provider value={{toggoleTheme,isDarkMode}}>

            {children}

        </ThemeContext.Provider>
    )
}

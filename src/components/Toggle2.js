import { useContext, useEffect } from "react";
import { ToggleThemes } from "./Result";

export default function Toggle(){
    const theme = useContext(ToggleThemes); // getting whole dom and getting in object theme
    
    useEffect(() => {
        document.body.style.backgroundColor = theme ? "#9ac6b3" : "#3c3c3c"; //ternary operator to change background theme of webpage
        document.body.style.color = theme ? "#000" : "#fff"; //ternary operator to change color of themes
    }, [theme]);
    return null; 
}

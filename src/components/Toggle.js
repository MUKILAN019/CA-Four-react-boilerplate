import { useContext, useEffect } from "react";
import { ToggleTheme } from "./QuestionBox";

export default function Toggle(){
    const theme = useContext(ToggleTheme); // getting whole dom and getting in object theme
    
    useEffect(() => {
        document.body.style.backgroundColor = theme ? "#9ac6b3" : "#3c3c3c"; //ternary operator to change background theme of webpage
        document.body.style.color = theme ? "#fff" : "#000"; //ternary operator to change color of themes
    }, [theme]);
    return null; 
}






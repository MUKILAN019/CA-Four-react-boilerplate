import { useContext, useEffect } from "react";
import { ToggleTheme } from "./QuestionBox";

export default function Toggle(){
    const theme = useContext(ToggleTheme);
    
    useEffect(() => {
        document.body.style.backgroundColor = theme ? "#9ac6b3" : "#3c3c3c";
        document.body.style.color = theme ? "#fff" : "#000";
    }, [theme]);
    return null; 
}






import { createContext, useState } from "react";

export const NombreContext = createContext();

export const NombreProvider = ({children}) => {
    const [nombre, setNombre] = useState("Lud");
    return (
    <NombreContext.Provider value = {{nombre,setNombre}}>{children}</NombreContext.Provider>
    )
}
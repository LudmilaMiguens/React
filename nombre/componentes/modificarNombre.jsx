import { NombreContext } from "../contex/context";
import { useContext } from "react";


export function NombreModificado(){
    const {nombre} = useContext(NombreContext)
    return(
        <>
        <p>{nombre}</p>
        </>
    )
}

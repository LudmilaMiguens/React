import { useContext } from "react"
import { NombreContext } from "../contex/context";

export function ModificarNombre(){
    let {setNombre} = useContext(NombreContext);

    let handleSudmit = (e) => {
        e.preventDefault();
        setNombre(e.target.nombre.value);
        e.target.nombre.value = "";
    };
    return(
        <>
        <form onSubmit = {handleSudmit}>
            <label htmlFor = "nombre"></label>
            <input type="text" name="nombre" id="nombre" placeholder="agregar nombre"/>
            <button type="submit">Enviar</button>

        </form>
        </>
    )
}
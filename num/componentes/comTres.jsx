import React from "react";
import { useContext } from "react";
import { NumContext } from "../contex/context";
export function ComTres(){
const {num,setNum} = useContext(NumContext)
    return(
    <div>
        <h1> Componente 3</h1>
        <button onClick={()=> setNum(num +1)} >Sumar 1</button>
        <p>valor Nume {num}</p>
        <button onClick={()=> setNum(num  - 1)}>Restar 1</button>
    </div>
    )
}
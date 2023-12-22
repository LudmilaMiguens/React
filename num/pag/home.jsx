import React from "react";
import { ComUno } from "../componentes/comUno";
import { NumContextProvidor } from "../contex/context";
export function Home(){
    return(
    <div>
        <h1> HOME</h1>
        <NumContextProvidor>
         <ComUno />   
        </NumContextProvidor>
        
    </div>
    )
}
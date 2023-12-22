import { createContext, useState } from "react";
 export const NumContext = createContext();
 export const NumContextProvidor = ({children}) =>{
    const[num,setNum] = useState(0);
    return<NumContext.Provider value={{num, setNum}}>{children}</NumContext.Provider>
 }
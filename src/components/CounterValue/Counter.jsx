import { useState } from "react";
export const Count = () => {

    let [value,setValue]= useState(100)
    
    return(
        <>
        <h1>Current Value:- {value}</h1>

        <button onClick={()=>setValue(value+1)}>increase</button>
        <button onClick={()=>setValue(value-1)}>decrease</button>

        </>
    )
}
import { useMemo, useState } from "react";   
//use usememo
export function Ass1(){
    const [input,setInput]=useState(0);


    //it ensure if input chnages then only it runs
const expensiveValue =useMemo(()=>{
let value=1;
for(let i=1;i<=input;i++){
value=value*i;
}
return value;
},[input]);



    return (
        <div>
            <input type="number" value={input} onChange={(e)=>setInput(Number(e.target.value))} />
            <p>calculated value:{expensiveValue}</p>
        </div>
    )
}
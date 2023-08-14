"use client"
import React,{FC, useState} from "react"
interface Price{
    price:number
    options?:{title:string ,additionalPrices:number}[]
    id:number
}
const Price:React.FC<Price>=({price,id,options})=>{
    const [count,setCount]=useState(1)
return (
    <div>
        <h2>${price.toFixed(2)}</h2>

        {/* Options Button */}
        <div>
            {
                options?.map(option=>(
                    <button key={option.title}>{option.title}</button>
                ))
            }
        </div>

      {/* Quantity Button */}
      <div>
      <div>
        <span>Quantity</span>
        <button onClick={()=>{
            if(count>1){
                setCount(count-1)
            }
    
        }} >{"<"}</button>
          <span>{count}</span>
        <button onClick={()=>setCount(count+1)} >{">"}</button>
      </div>
      {/* Cart Button */}
      <button>Add Cart</button>
      </div>
    </div>
)
}
export default Price
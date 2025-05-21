
import React from "react"
export default function ItemBody ({title, desc, price}) {
 
   return (
   <div>
    <div>
      <h3 className="item.title">{title}</h3>
      <p className="item.desc">{desc}</p>
      <p className="item.price">Rp.{price}</p>
       </div>
   </div>
  
   )
}
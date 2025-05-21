import React from "react";
import MenuItem from "./MenuItem";

export default function MenuList({foods, onDeleteHandler,id}) {
  return(
    <div className="menu">

      {foods.map((food) => (
        <MenuItem key={food.id} {...food}
          onDeleteHandler={onDeleteHandler} 
          id={id} 
        {...food}
        />
      ))
      }
    </div>
  )



}
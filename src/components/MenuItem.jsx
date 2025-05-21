import ItemBody from "./ItemBody.jsx";
import ItemImage from "./ItemImage.jsx";
import DeleteButton from "./DeleteButton.jsx";
import { useState } from "react";
import React from "react";

export default function MenuItem({title, desc, price, image, id, onDeleteHandler}) {
    return (
        <div className="menu-item">
              <ItemImage image={image}
              title= {title}/>
              <ItemBody 
              title={title}
                desc={desc}
                price={price}
              />
              <DeleteButton id = {id} onDeleteHandler={onDeleteHandler}/> 


        </div>
    );
}
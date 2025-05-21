import React from 'react';
import Menu from './Menu';
 
function DeleteButton({ id, onDeleteHandler }) {
  return <button className='contact-item__delete' onClick={() => onDeleteHandler(id)}>X</button>
}
 
export default DeleteButton;
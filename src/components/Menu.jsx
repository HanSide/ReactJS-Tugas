import { Component } from "react";
import dataList from "../utils/data";
import MenuList from "./MenuList";
import MenuInput from "./MenuInput";

export default class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            foods: dataList(),
        };


        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onAddMenuHandler = this.onAddMenuHandler.bind(this);

    }
    onDeleteHandler(id) {
        const foods = this.state.foods.filter((food) => food.id !== id);
        
        this.setState({ foods });
    }

     onAddMenuHandler({title, desc,price, image}) {
        this.setState((prevState) => {
     return {
       foods: [
         ...prevState.foods,
         {
           id: +new Date(),
           title,
           desc,
           price,
           image,
         }
       ]
     }
   });
 }

    render() {
        const {foods} = this.state;
        return (
            <div>
                 <h1>Warung Padang</h1>
        <h2>Tambah Menu</h2>
        <MenuInput 
          addMenu = {this.onAddMenuHandler}
          />
                <h1>Daftar Menu</h1>
                <MenuList foods={foods} 
                         onDeleteHandler={this.onDeleteHandler}
                />
               
            </div>
        );
    }
}

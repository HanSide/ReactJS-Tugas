import { Component } from "react";
import dataList from "../utils/data";
import MenuList from "./MenuList";

export default class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            foods: dataList(),
        };


        this.onDeleteHandler = this.onDeleteHandler.bind(this);
    }
    onDeleteHandler(id) {
        
        const foods = this.state.foods.filter((food) => food.id !== id);
        this.setState({ foods });
    }
    render() {
        const {foods} = this.state;
        return (
            <div>
                <h1>Daftar Menu</h1>
                <MenuList foods={foods} 
                         onDeleteHandler={this.onDeleteHandler}
                />
               
            </div>
        );
    }
}



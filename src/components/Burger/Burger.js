import React from "react";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
import './Burger.css'

const Burger = (props)=> {
    let elements = Object.keys(props.ingredients).map(keyIng=>{
        return [...Array(props.ingredients[keyIng])].map((_,i)=>
         <BurgerIngredient key={keyIng + i}  type = {keyIng} />);}).reduce((prev,el)=>{
            return prev.concat(el);
        },[]);
        if(elements.length === 0){
            elements = <p>pleaz choose your ingredients :)</p>
        }
 return  ( <div className="Burger">
    <BurgerIngredient type="bread-top"/>
    {elements}
    <BurgerIngredient type="bread-bottom"/>
    </div>)
}

export default Burger;
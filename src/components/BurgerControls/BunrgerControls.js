import React from 'react';
import BurgerControl from './BurgerControl/BurgerControl';
import './BuildControls.css'

const ingredient  = [
    {label : "Salad" , type :"salad"},
    {label : "Bacon" , type :"bacon"},
    {label : "Cheese" , type :"cheese"},
    {label : "Meat" , type :"meat"}
]


const BurgerControls = (props)=>{
   return <div className="BuildControls">
   <p>Price{props.price}</p>
     {ingredient.map(ing=>{
         return <BurgerControl label = {ing.label} key = {ing.label} 
         action = {props.action} type = {ing.type} disable = {props.disable[ing.type]}/> 
     })}
    </div>
}

export default BurgerControls
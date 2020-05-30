import React , { Component } from "react";
import Aux from "../hoc/Aux";
import BurgerIngredient from "../components/Burger/BurgerIngredient/BurgerIngredient";
import Burger from "../components/Burger/Burger";
import BurgerControls from "../components/BurgerControls/BunrgerControls";

class BurgerBuilder extends Component {
     prices = {
            salad : 2,
            meat : 1,
            cheese: 1,
            bacon : 0.5
    }
    state = {
        ingredients : {
            salad : 0,
            meat : 0,
            cheese: 0,
            bacon : 0
        },
        price : 0
    }

     addMinsIng = (action,ingredient)=>{
        let newState;
         if(action === "PLUS"){
            newState = {...this.state}
            newState.ingredients[ingredient] = newState.ingredients[ingredient]+1
            newState.price = newState.price+this.prices[ingredient]
         }else{
            newState = {...this.state}
            newState.ingredients[ingredient] = newState.ingredients[ingredient]-1
            newState.price = newState.price-this.prices[ingredient]
         }
            this.setState(newState)
    } 
    render () {
       let  disableIngredients = {...this.state.ingredients} 
        for(let ing in disableIngredients){
            disableIngredients[ing] = disableIngredients[ing]<=0
        }
        return (
            <Aux>
                <Burger ingredients = {this.state.ingredients} />
                <BurgerControls action = {this.addMinsIng} disable = {disableIngredients} price={this.state.price}/>
            </Aux>
        )
    }
}
export default BurgerBuilder;
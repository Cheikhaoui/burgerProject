import React from 'react' ;
import './BurgerControl.css'


const BurgerControl = (props)=>{
return <div className ="BurgerControl">
    <div className="Label">{props.label}</div>
    <button className="Less" disabled = {props.disable} onClick = {()=>props.action("MINUS",props.type)}>Less</button>
    <button className ="More" onClick = {()=>props.action("PLUS",props.type)}>More</button>
</div>
}

export default BurgerControl;
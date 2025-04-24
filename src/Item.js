import React, { useState } from 'react';
import './item.css';

export default function Item(props) {
const [amount, setAmount] = useState(1);

function handleAddItem () {
    props.onAddToCart(props.title, amount);
}
    return(
        <li className='item-container'>
                <h4>{props.title}</h4>
                <img src={`./images/${props.picture}`} alt={props.title}/>
                <p>{props.description}</p>
                <div className="amount-container"> {/* Seperate into a different component with state logic*/}
                <button onClick={() => setAmount((a)  =>  (a > 1 ? a - 1 : a))}>-</button>
                <p>{amount}</p>
                <button onClick={() => setAmount((a)=> (a + 1))}>+</button>
                </div>
                <button className='cart-container' onClick={handleAddItem}>Add to cart</button>
        </li>
    )
}
import React, { useState } from 'react';
import './item.css';

export default function Item(props) {
const [amount, setAmount] = useState(0);
    return(
        <li>
                <h4>{props.title}</h4>
                <img src={`./images/${props.picture}`} alt={props.title}/>
                <p>{props.description}</p>
                <div className="amount-container"> {/* Seperate into a different component with state logic*/}
                <button onClick={() => setAmount((a) =>  a - 1)}>-</button>
                <p>{amount}</p>
                <button onClick={() => setAmount((a)=> a + 1)}>+</button>
                </div>
        </li>
    )
}
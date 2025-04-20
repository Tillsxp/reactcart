import React from 'react';
import './item.css';

export default function Item(props) {

    return(
        <li>
                <h4>{props.title}</h4>
                <img src={`./images/${props.picture}`} alt={props.title}/>
                <p>{props.description}</p>
                <div className="amount-container"> {/* Seperate into a different component with state logic*/}
                <button>-</button>
                <p>0</p>
                <button>+</button>
                </div>
        </li>
    )
}
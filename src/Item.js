import React from 'react';

export default function Item(props) {

    return(
        <li>
                <h4>{props.title}</h4>
                <img src={`./images/${props.picture}`} alt={props.title}/>
                <p>{props.description}</p>
        </li>
    )
}
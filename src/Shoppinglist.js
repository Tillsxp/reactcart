import React from 'react';
import Item from './Item';
import './shoppinglist.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
export default function Shoppinglist () {
    const item = [
        {
            name:"Säbövik",
            picture:"bed.png",
            description: "A modern comfortable bed"
        },
        {
            name:"Skogsta",
            picture:"chair.png",
            description: "Made out of acacia wood with back support"
        },
        {
            name:"Kivik",
            picture:"sofa.png",
            description: "3-seatsofa comfortable sofa"
        },
        {
            name:"Mörbylånga",
            picture:"table.png",
            description: "Oak table with a lot of character"
        }
    ];
    const listItems = item.map(item => 
        <Item 
        key={item.name}
        title={item.name}
        picture={item.picture}
        description={item.description}
        />
    
    );
    return(
        <>
        <div>
        <h1>Ikea list</h1>
        <button className='cart'><FontAwesomeIcon icon={faCartShopping} /></button>
        </div>
        <ul>
            {listItems}
        </ul>
        </>
    )
}
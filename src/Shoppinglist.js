import React from 'react';
import Item from './Item';

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
        <h4>Ikea list</h4>
        <ul>
            {listItems}
        </ul>
        </>
    )
}
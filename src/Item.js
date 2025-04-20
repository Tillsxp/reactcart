import React from 'react';

export default function Item(props) {
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
        <li>
        <h4>{item.name}</h4>
        <img src={`./images/${item.picture}`}/>
        <p>{item.description}</p>
        </li>
    )
    return(
        <>
            <ul>
                {listItems}
            </ul>
        </>
    )
}
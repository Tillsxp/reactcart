import React from 'react';

export default function Item() {
    const item = [
        {
            name:"Säbövik",
            picture:"bed.png",
            desription: "A modern comfortable bed"
        },
        {
            name:"Skogsta",
            picture:"chair.png",
            desription: "A modern comfortable bed"
        },
        {
            name:"Kivik",
            picture:"sofa.png",
            desription: "A modern comfortable bed"
        },
        {
            name:"Mörbylånga",
            picture:"table.png",
            desription: "A modern comfortable bed"
        }
    ];

    return(
        <>
        <div>
            <h4>Säbövik</h4>
            <img src='./images/bed.png' alt='picture'/>
            <p>Description</p>
        </div>
        </>
    )
}
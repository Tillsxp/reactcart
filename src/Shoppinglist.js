import React from 'react';
import Item from './Item';

export default function Shoppinglist () {
    return(
        <>
        <h4>Ikea list</h4>
        <ul>
            <li>
                <Item/>
            </li>
        </ul>
        </>
    )
}
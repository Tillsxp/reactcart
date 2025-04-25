import React from 'react';
import './cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTrash} from '@fortawesome/free-solid-svg-icons';

export default function Cart({ cartItems, onRemoveItem }) {
    if (cartItems.length === 0) return null;

    function handleRemove(title){
        onRemoveItem(title);
    }

    return (
        <div className="cart-box">
            <ul>
                <h4>Cart List</h4>
                {cartItems.map((item, index) => (
                    <li key={index}>
                        <button onClick={() => handleRemove(item.title)} className='trash'><FontAwesomeIcon icon={faTrash}/></button>
                        {item.title} - {item.amount}
                    </li>
                ))}
            </ul>
        </div>
    );
}

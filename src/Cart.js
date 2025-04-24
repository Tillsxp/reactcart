// src/Cart.js
import React from 'react';
import './cart.css';

export default function Cart({ cartItems }) {
    if (cartItems.length === 0) return null;

    return (
        <div className="cart-box">
            <ul>
                <h4>Cart List</h4>
                {cartItems.map((item, index) => (
                    <li key={index}>
                        {item.title} - {item.amount}
                    </li>
                ))}
            </ul>
        </div>
    );
}

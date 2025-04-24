import React, { useEffect, useState } from 'react';
import Item from './Item';
import Cart from './Cart';
import './shoppinglist.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
export default function Shoppinglist () {
    const [items, setItems] = useState([]);    
    const [cartItems, setCartItems] = useState([]);
    
    useEffect(() => {
        fetch('/item.json')
        .then(res => res.json())
        .then(data => setItems(data))
    }, [])

    function handleAddItemToCart(title,amount){
        setCartItems(prev =>{
            const existingItem = prev.find(item => item.title === title);

            if(existingItem){
                return prev.map(item =>
                    item.title === title ? {...item, amount: item.amount + amount }: item
                );
            }else{ 
            return [...prev, {title,amount}];
        }
    });
}
    const listItems = items.map(item => (
        <Item 
        key={item.name}
        title={item.name}
        picture={item.picture}
        description={item.description}
        onAddToCart={handleAddItemToCart}
        />
    
    ));


    return(
        <>
        <div>
        <h1>Ikea list</h1>
        <button className='cart' ><FontAwesomeIcon icon={faCartShopping} /></button>
        </div>
        <Cart cartItems = {cartItems}/>
        <ul className='item-container'>
            {listItems}
        </ul>
        </>
    )
}
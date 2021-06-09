import React from 'react'
import {useSelector } from 'react-redux'
import CartItem from './CartItem'

const Cart = () => {
    const cart = useSelector(state => state.cart);
    return (
        <div>
            {cart.addedIds?.map( (item) => (
                <div>
                    <CartItem itemId={item} itemQuantity ={cart.quantityById[item]}/>
                </div>
            ))}  
        </div>
    )
}

export default Cart

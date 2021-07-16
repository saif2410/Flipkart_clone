import React from 'react'
import {useSelector } from 'react-redux'
import CartItem from './CartItem'
import { useDispatch, useState } from 'react-redux'
import { buy } from '../../actions'
import { useHistory } from 'react-router'

const Cart = () => {
    const dispatch = useDispatch(buy);
    const history = useHistory();
    const cart = useSelector(state => state.cart);
    const bought = ()=>{
        dispatch(buy());
        alert('Ur order is placed and we will delever it soon')
        history.push('/');
    }
    return (
        <div>
            {cart.addedIds?.map( (item) => (
                <div>
                    <CartItem itemId={item} itemQuantity ={cart.quantityById[item]}/>
                </div>
            ))}
            <button onClick={bought} ><h6>Buy</h6></button>  
        </div>
    )
}

export default Cart

import React from 'react'
import { useEffect,useState } from 'react'
import { useDispatch} from 'react-redux'
import { addToCart, removeFromCart } from '../../actions'

const CartItem = ({itemId,itemQuantity}) => {
    const dispatch = useDispatch();
    const [itemdata,setItemdata] = useState()
    useEffect(()=>{
        const getItemData = async ()=> {
            const fetcheddata = await itemData()
            setItemdata(fetcheddata)
        }
        getItemData();
    }, [])
    const itemData = async() =>{
        //Simple POST request with a JSON body using fetch for clicked items
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({itemId})
        };
        const res = await fetch('http://localhost:5000/cart', requestOptions)
        const data = await res.json()
        return data
    }
    return (
        <div>
            {itemdata ?  <h5>{itemdata.name}  </h5>: ''}
            <h5>Quantity : {itemQuantity}</h5>
            <button onClick={()=>dispatch(removeFromCart(itemId))}>-</button>
            <button onClick={()=>dispatch(addToCart(itemId))}>+</button>
            {itemdata ?  <img src={"data:"+itemdata.img.contentType+";base64,"+itemdata.img.data} /> : ''}
        </div>
    )
}

export default CartItem

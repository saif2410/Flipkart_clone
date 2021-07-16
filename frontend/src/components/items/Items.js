import { useState, useEffect } from 'react'
import {useSelector } from 'react-redux'
import Item from './Item'

const Items = () => {
    const [items,setItem] = useState([])
    const categoryClicked = useSelector(state => state.categoryClicked);

    useEffect(()=>{
        const getItems = async ()=> {
            const fetchedItems = await clickedItems()
            setItem(fetchedItems)
        }
        getItems();
    }, [])

    const clickedItems = async() =>{
        //Simple POST request with a JSON body using fetch for clicked items
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({categoryClicked})
        };
        const res = await fetch('http://localhost:5000/category', requestOptions)
        const data = await res.json()
        return data
    }
    return (
        <div>
           {items.length>0 ? <Item items={items} /> : `No products found for ${categoryClicked}`} 
        </div>
    )
}

export default Items

import React,{useState, useEffect} from 'react'
import {useSelector , useDispatch} from 'react-redux'
import { signOut } from '../../actions'

const Profile = () => {
    const dispatch = useDispatch();
    const isLogged = useSelector(state => state.isLogged)
    const [data,setData] = useState()
    useEffect(()=>{
        const getData = async ()=> {
            const fetcheddata = await pdata()
            setData(fetcheddata)
        }
        getData();
    }, [])
    const pdata = async() =>{
        const requestOptions = {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'Authorization' : 'Bearer '+isLogged.token
            },
        };
        const res = await fetch('http://localhost:5000/profile', requestOptions)
        const data = await res.json()
        return data
    }
    return (
        <div>
            {data ?  <h5>{data.firstname}  </h5>: ''}
            {data ?  <h5>{data.lastname}  </h5>: ''}
            {data ?  <h5>{data.email}  </h5>: ''}
            <button onClick={()=>dispatch(signOut())}>logout</button>
        </div>
    )
}

export default Profile

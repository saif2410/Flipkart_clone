import React,{useState, useEffect} from 'react'
import {useSelector , useDispatch} from 'react-redux'
import { signOut } from '../../actions'
import {useHistory} from 'react-router-dom'

const Profile = () => {
    const history = useHistory();
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
    const thisone=()=>{
        dispatch(signOut());
        history.push('/')
    }
    return (
        <div>
            <br/>
            {data ?  <h5>FirstName : {data.firstname}  </h5>: ''}
            <br/>
            {data ?  <h5>LastName : {data.lastname}  </h5>: ''}
            <br/>
            {data ?  <h5> Email : {data.email}  </h5>: ''}
            <br/>
            <button onClick={thisone}>logout</button>
        </div>
    )
}

export default Profile

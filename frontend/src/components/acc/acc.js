import React  from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Modal} from 'react-bootstrap';
import { useState } from 'react';
import "./acc.css"
import Signup from "./sign.js"
import { useDispatch } from 'react-redux'
import { signIn } from '../../actions'


export const Acc = () => {
    const dispatch = useDispatch();
    const addUser = async(user) =>{
        console.log(user);
        const res = await fetch('http://localhost:5000/addUser',
        {
          method: 'POST',
          headers:{
          'Content-type':'application/json'
        },
        body: JSON.stringify(user)
        })
        const data = await res.json();
        if( data.status ){
          dispatch(signIn(data.token));
        }else{
          alert('email already exists');
        }
    }
     
    const checkUser = async(user) =>{
      const res = await fetch('http://localhost:5000/checkUser',
      {
        method: 'POST',
        headers:{
        'Content-type':'application/json'
      },
      body: JSON.stringify(user)
      })
      const data = await res.json();
      if( data.status ){
        dispatch(signIn(data.token));
      }else{
        alert('id and pass doesnt match');
      }
    }
    

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return (
        <div>
            <button className="btn btn-secondary"  to="#" variant="primary" onClick={handleShow} id="btn_nav_1">Sign In</button>
            { <Modal show={show} onHide={handleClose}> 
            <div className="card" className="login-box">      
                <div className="row">
                    <div className="col-md-6 mx-auto p-0">
                        <Signup onadd={addUser} oncheck={checkUser}/>
                    </div>
                </div>
            </div> 
            </Modal> } 
        </div>
    )
}

    
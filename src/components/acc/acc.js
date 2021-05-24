import React  from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Modal} from 'react-bootstrap';
import { useState } from 'react';
import "./acc.css"
import Signup from "./page.js"
const addUser = async(user) =>{
  const User = JSON.stringify(user)
 console.log(User);}

 export const Acc = ({account}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  if (!account==1){
  return (
      <div>
      

              <button className="btn btn-secondary"  to="#" variant="primary" onClick={handleShow} id="bgcolor">Sign In</button>
              { <Modal show={show} onHide={handleClose}> 
              <div className="card" className="login-box">      
         <div className="row">
         <div className="col-md-6 mx-auto p-0">

         <Signup onAdd={addUser}/>


         </div>
           </div>
         </div> 
         </Modal> 
     } </div>
    )}else{
        return(
            <div>
{
                <button className="btn btn-secondary" id="myBtn" to="#" onClick="signOut()" id="bgcolor">Sign Out</button>
            }
            </div>
        )
    }
}
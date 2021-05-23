import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Modal} from 'react-bootstrap';
import { useState } from 'react';
import "./acc.css"


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
            
               <div >
                 <div className="login-snip"> <input id="tab-1" type="radio" name="tab" className="sign-in" defaultChecked /><label htmlFor="tab-1" className="tab">Login</label> <input id="tab-2" type="radio" name="tab" className="sign-up" /><label htmlFor="tab-2" className="tab">Sign Up</label>
                   <div className="login-space">
                     <div className="login">
                       <div className="group"> <label htmlFor="user" className="label">Username</label> <input id="user" type="text" className="input" placeholder="Enter your username" /> </div>
                       <div className="group"> <label htmlFor="pass" className="label">Password</label> <input id="pass" type="password" className="input" data-type="password" placeholder="Enter your password" /> </div>
                       <div className="group"> <input type="submit" className="button" defaultValue="Sign In" id="bt" /> </div>
                       <div className="hr" />
                       <div className="foot"> <a href="#">Forgot Password?</a> </div>
                     </div>
                     <div className="sign-up-form">
                       <div className="group"> <label htmlFor="user" className="label">Username</label> <input id="Firstuser" type="text" className="input" placeholder="Enter First Name" /> </div>
                       <div className="group"> <label htmlFor="user" className="label">Username</label> <input id="Seconduser" type="text" className="input" placeholder="Enter Second Name" /> </div>
                       <div className="group"> <label htmlFor="pass" className="label">Email Address</label> <input id="pass" type="text" className="input" placeholder="Enter your email address" /> </div>
                       <div className="group"> <label htmlFor="pass" className="label">Password</label> <input id="pass" type="password" className="input" data-type="password" placeholder="Create your password" /> </div>

                       <div className="group"> <input type="submit" className="button" defaultValue="Sign Up" id="bt"  /> </div>
                       <div className="foot"> <label htmlFor="tab-1">Already Member?</label> </div>
                     </div>
                   </div>
                 </div>
               </div>
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

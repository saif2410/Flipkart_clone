import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./pages.css";

import React from 'react'

const Signup = ({onAdd}) => {
    const [Firstname, setFname] = useState('')
    const [Lastname, setLname ]= useState('')
    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
    
        if ((!Password || !Email)||(!Firstname||!Lastname)) {
          alert('Please add All Feild')
          return
        }
    
        onAdd({ Firstname,Lastname,Email, Password })
    
        setFname('')
        setLname('')
        setEmail('')
        setPassword('')
      
      }
  return (
    <div className = 'Signup'>
         <form  >
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
                       <div className="group"> <label htmlFor="user" className="label">Username</label> <input id="Firstuser" type="text" className="input" placeholder=" First Name"  value={Firstname} onChange={(e) => setFname(e.target.value)} /> </div>
                       <div className="group"> <label htmlFor="user" className="label">Username</label> <input id="Seconduser" type="text" className="input" placeholder=" Last Name"  value={Lastname} onChange={(e) => setLname(e.target.value)}/> </div>
                       <div className="group"> <label htmlFor="pass" className="label">Email Address</label> <input id="pass" type="text" className="input" placeholder=" Email address" value={Email} onChange={(e) => setEmail(e.target.value)}/> </div>
                       <div className="group"> <label htmlFor="pass" className="label">Password</label> <input id="pass" type="password" className="input" data-type="password" placeholder="Create your password" value={Password} onChange={(e) => setPassword(e.target.value)}/> </div>

                       <div className="group"> <input type="submit" onClick={onSubmit}className="button" defaultValue="Sign Up" id="bt"  /> </div>
                       <div className="foot"> <label htmlFor="tab-1">Already Member?</label> </div>
                     </div>
                   </div>
                 </div>
               </div>
            </form>
    </div>
  )
}

export default Signup
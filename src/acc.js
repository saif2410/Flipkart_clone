import React from 'react'
import  "./signup.css";

export function Signup(){
    
}

export const Acc = ({account}) => {
    if (!account==1){
    return (
        <div>
            {
                <button className="btn btn-secondary"  id="myBtn" to="#" onClick={{Signup}} id="bgcolor">Sign In</button>
            }
        </div>
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

import React from 'react'
import {Acc} from "../acc/acc.js";
import Profile from "../acc/Profile";
import './nav.css';
import {useHistory} from 'react-router-dom'
//import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {useSelector } from 'react-redux'

export const Navbar1 = () => {
     const isLogged = useSelector(state => state.isLogged)
     const history = useHistory();
     const goToCart =()=>{
          {isLogged.status ?  history.push('/cart'):alert('not logged in')}
     }
     return (
          <div  >
          <nav  className="navbar" id="stick" >
               <div class="input-group" >
                    <img src="https://upload.wikimedia.org/wikipedia/commons/e/ee/Chain_link_icon.png" alt="Girl in a jacket" height='36px' width='80px'  />
                    
                    <div style={{marginLeft:'10.9%'}} >
                         <tr>
                              <td>
                                   <div class="form-outline">
                                        <input type="search"  class="form-control" id="search_bar" />
                                   </div>
                              </td>
                              <td>
                                   <div>
                                        <button type="button" class="btn btn-primary" id='search_btn'>
                                             <label class="form-label" for="form1">Search</label>
                                             <i class="fas fa-search"></i>
                                        </button>
                                   </div>
                              </td>
                         </tr>
                    </div>
          


                    <div style={{marginLeft:'9.6%'}}>
                         <tr>
                              <td>
                              {isLogged.status ?  
                                   <Profile />  
                                   : 
                                   <div className="nav-item" id="right-item">
                                        <Acc />                
                                   </div>}
                              </td>

                              <td >     
                                   <div className="nav-item" > 
                                        <button className="btn btn-secondary" onClick={()=>goToCart()} id="btn_nav_1" to="#" style={{paddingRight:'20px'}}> 
                                             <svg className="cart-svg " >
                                                  <path  d="M15.32 2.405H4.887C3 2.405 2.46.805 2.46.805L2.257.21C2.208.085 2.083 0 1.946 0H.336C.1 0-.064.24.024.46l.644 1.945L3.11 9.767c.047.137.175.23.32.23h8.418l-.493 1.958H3.768l.002.003c-.017 0-.033-.003-.05-.003-1.06 0-1.92.86-1.92 1.92s.86 1.92 1.92 1.92c.99 0 1.805-.75 1.91-1.712l5.55.076c.12.922.91 1.636 1.867 1.636 1.04 0 1.885-.844 1.885-1.885 0-.866-.584-1.593-1.38-1.814l2.423-8.832c.12-.433-.206-.86-.655-.86 " fill="#fff "></path>
                                             </svg> 
                                        </button>     
                                   </div>
                              </td>
                         </tr>
                    </div>   

               </div>
          </nav> 
          </div>         
     )
}

export const Navbar2 = (account) => {
     return (
          <div class="input-group" style={{backgroundColor:'rgb(43, 49, 47)',width:'auto'}}>

               <div className="nav-item ">
                    <button className="btn btn-secondary" id="btn_nav_2" to="#">Fashion</button> 
               </div>  

               <div className="nav-item">
                    <button className="btn btn-secondary" id="btn_nav_2" to="#">Electronics</button> 
               </div>

               <div className="nav-item">
                    <button className="btn btn-secondary" id="btn_nav_2" to="#">Utilities</button>
               </div>

               <div className="nav-item" > 
                    <button className="btn btn-secondary" id="btn_nav_2" to="#">Groceries</button>
               </div>

               <div className="nav-item" > 
                    <button className="btn btn-secondary" id="btn_nav_2" to="#">New Releases</button>
               </div>

               <div className="nav-item" > 
                    <button className="btn btn-secondary" id="btn_nav_2" to="#">Customer Service</button>
               </div>

          </div> 
     )
}

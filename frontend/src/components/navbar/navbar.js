import React from 'react'
import {Acc} from "../acc/acc.js";
import Profile from "../acc/Profile";
import { useState } from 'react';
import {Modal} from 'react-bootstrap';
import './nav.css';
import "../acc/acc.css"
import {useHistory} from 'react-router-dom'
//import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {useSelector } from 'react-redux'
import {clickedCategory} from '../../actions'
import {useDispatch} from 'react-redux'
import Item from '../items/Item.js';

export const Navbar1 = () => {
     const isLogged = useSelector(state => state.isLogged)
     const history = useHistory();
     const goToCart =()=>{
          {isLogged.status ?  history.push('/cart'):alert('NOT LOGGED IN')}
     }
     const [show, setShow] = useState(false);
     const [svalue, setSvalue] = useState('');
     const handleClose = () => setShow(false);
     const handleShow = () => setShow(true);

    
     const dispatch = useDispatch();
     // same thing can be done through useReducer
     const clicked_item =(str)=>{
          if(str == "NULL"){
               history.push('/');
          }
          else{
          dispatch(clickedCategory(str));
          history.push('/category')
          }
     }
     
     return (
          <div  >
          <nav  className="navbar" id="stick" >
               <div class="input-group" >
                    <img src="https://upload.wikimedia.org/wikipedia/commons/e/ee/Chain_link_icon.png" alt="Girl in a jacket" height='36px' width='80px'  />
                    
                    <div style={{marginLeft:'32%'}} >
                         <tr>
                              <td>
                                   <div class="form-outline">
                                        <input type="search"  class="form-control" id="search_bar" value={svalue} onChange={(e) => setSvalue(e.target.value)} />
                                   </div>
                              </td>
                              <td>
                                   <div>
                                        <button type="button"  onClick={()=> clicked_item(svalue) }class="btn btn-primary" id='search_btn'>
                                             <label class="form-label" for="form1">Search</label>
                                             <i class="fas fa-search"></i>
                                        </button>
                                   </div>
                              </td>
                         </tr>
                    </div>
          


                    <div style={{marginLeft:'33%'}}>
                         <tr>
                              <td>
                              {isLogged.status ?  
                                    <div>
                                    <button className="btn btn-secondary"  to="#" variant="primary" onClick={handleShow} id="btn_nav_1">Profile</button>
                                    { <Modal show={show} onHide={handleClose}> 
                                    <div className="card" className="profile-box">      
                                        <div className="row">
                                            <div className="col-md-6 mx-auto p-0">
                                                <Profile/>
                                            </div>
                                        </div>
                                    </div> 
                                    </Modal> } 
                                </div> 
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
     const dispatch = useDispatch();
     const history = useHistory();
     const clicked_item =(str)=>{
          dispatch(clickedCategory(str));
          history.push('/category')  // same thing can be done through useReducer
     }
     return (
          <div class="input-group" style={{backgroundColor:'rgb(220, 20, 60)',width:'auto'}}>

               <div className="nav-item ">
                    <button className="btn btn-secondary" onClick={()=> clicked_item('clothing')} id="btn_nav_2" to="#">Fashion</button> 
               </div>  

               <div className="nav-item">
                    <button className="btn btn-secondary" onClick={()=> clicked_item('electronics')} id="btn_nav_2" to="#">Electronics</button> 
               </div>

          </div> 
     )
}

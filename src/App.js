
import './App.css';
import './components/navbar/nav.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Acc} from "./acc.js";
import "./signup.css";
const account =0;
function App() {
  return (
<div>
<nav  className="navbar" >
  <table>
      <tr>
          <td>
              <a className="navbar-brand" id="icon" to="#">Flipcart</a>
          </td>


          <td className="nav-item ">
               <button className="btn btn-secondary" id="bgcolor" to="#">Fashion</button> 
          </td>  

          <td className="nav-item">
                <button className="btn btn-secondary" id="bgcolor" to="#">Electronics</button> 
          </td>

          <td className="nav-item">
                <button className="btn btn-secondary" id="bgcolor" to="#">Utilities</button>
           </td>

           <td className="nav-item" > 
                <button className="btn btn-secondary" id="bgcolor" to="#">Kirana</button>
           </td>
      </tr> 
  </table>
    {/* Cart and Sign Up */}

    <table>
      <tr>
    <td className="nav-item" id="right-item">
          <Acc acc={account}/>                
       </td>
    
       <td className="nav-item" > 
        
           <button className="btn btn-secondary" id="bgcolor" to="#" > 
                      <svg className="cart-svg " >
                          <path  d="M15.32 2.405H4.887C3 2.405 2.46.805 2.46.805L2.257.21C2.208.085 2.083 0 1.946 0H.336C.1 0-.064.24.024.46l.644 1.945L3.11 9.767c.047.137.175.23.32.23h8.418l-.493 1.958H3.768l.002.003c-.017 0-.033-.003-.05-.003-1.06 0-1.92.86-1.92 1.92s.86 1.92 1.92 1.92c.99 0 1.805-.75 1.91-1.712l5.55.076c.12.922.91 1.636 1.867 1.636 1.04 0 1.885-.844 1.885-1.885 0-.866-.584-1.593-1.38-1.814l2.423-8.832c.12-.433-.206-.86-.655-.86 " fill="#fff "></path>
                      </svg> 
           </button>     
                             
           </td>
           </tr>
           </table> 

  
</nav>
</div>
  );
}

export default App;

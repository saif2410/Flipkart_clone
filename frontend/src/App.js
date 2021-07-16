import './App.css';
import {Navbar1, Navbar2} from './components/navbar/navbar.js'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {Slider} from './components/corousel/slider.js'
import Products from './components/content/Products.js'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Items from './components/items/Items'
import Cart from './components/cart/Cart'

import "./components/img_electronics/Elec.css"

function App()  {
   return (
      <Router>
         <div>                
            <Navbar1/>
            <Route path='/' exact render={(props) => (
               <> 
                  <Navbar2/> 
                  <Slider/>
                  <Products/>
               </>
               )}/>

            <Route path='/category' exact render={(props) => (
               <> 
                  <Items/>
               </>
               )}/>
            
            <Route path='/cart' component={Cart} />
         </div>
      </Router>
  );
}

export default App;

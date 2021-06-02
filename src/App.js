
import './App.css';
import {Navbar} from './components/navbar/navbar.js'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {Slider} from './components/corousel/slider.js'
import {Products} from './components/content/Products.js'

import "./components/img_electronics/Elec.css"

function App()  {const addUser = async(user) =>{
    //   const res = await fetch('http://localhost:5000/addUser',
    //   {
    //     method: 'POST',
    //     header:{
    //     'content-type':'application/json'
    //   },
    //   body: JSON.sdivingify(user)
    //  } )
    const User = JSON.sdivingify(user)
    console.log(User);
   }
  return (
     <div>       
          <Navbar/> 
          <Slider/>
          <Products/>
          <Products/>
          <Products/>
          <Products/>

     </div>
  );
}

export default App;

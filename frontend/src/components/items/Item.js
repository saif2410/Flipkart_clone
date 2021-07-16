import {useSelector , useDispatch} from 'react-redux'
import { addToCart } from '../../actions'

const Item = ({items}) => {
  const isLogged = useSelector(state => state.isLogged)
  const dispatch = useDispatch();
  const addtocart = (id)=>{
    {isLogged.status? dispatch(addToCart(id)):alert('You are not logged in')}
  }
    return (
        <>
          {items?.map( (item) => (
            <div>
                <h3 style={{backgroundColor : 'rgb(43, 49, 47)'}}>{item.name}</h3>
                <img src={"data:"+item.img.contentType+";base64,"+item.img.data} />
                <h4 style={{color : 'rgb(43, 49, 47)'}}>Description : {item.description}</h4>
                <h4 style={{color : 'rgb(43, 49, 47)'}}>Price : {item.price}</h4>
                <button onClick={()=> addtocart(item._id)}  style={{backgroundColor : 'rgb(220, 50, 50)', color : 'white'}}>add to cart</button>
                <br/>
                <br/>
                <br/>

            </div>
          ))}  
        </>
    )
}

export default Item

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
                <p>{item.name}</p>
                <img src={"data:"+item.img.contentType+";base64,"+item.img.data} />
                <button onClick={()=> addtocart(item._id)}>add to cart</button>
            </div>
          ))}  
        </>
    )
}

export default Item

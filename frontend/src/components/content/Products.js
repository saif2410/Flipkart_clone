import React from 'react'
import {Card} from 'react-bootstrap'
import {Col} from 'react-bootstrap'
import {Row} from 'react-bootstrap'
import {Container} from 'react-bootstrap'


import headphones from '../img_electronics/headphones.png'
import laptop from '../img_electronics/laptop.png'
import phone from '../img_electronics/phone.png'
import watch from '../img_electronics/watch.png'


import {useHistory} from 'react-router-dom'
import {clickedCategory} from '../../actions'
import {useDispatch} from 'react-redux'

const Products = () => {
  const history= useHistory();
  const dispatch = useDispatch();
  // same thing can be done through useReducer
  const clicked_item =(str)=>{
    dispatch(clickedCategory(str));
    history.push('/category')
  }

  return (
    <div>
      <Card style={{height:'auto',marginTop:'30px',width:'auto',marginLeft:'20px',marginRight:'20px',borderColor:'crimson',borderWidth:'2px'}} >
        <Card.Header style={{backgroundColor:'crimson',textAlign:'center',color:'white',fontSize:'25px',fontFamily:'Lucida Console',borderColor:'rgb(43, 49, 47)',borderWidth:'3px'}}>
          Electronics and Accessories
        </Card.Header>
        
        <Card.Body >
          <Card.Text>
            <Container >
              <Row>        
                <Col id="img" onClick={()=> clicked_item('earphone') }>
                <img src={headphones} height="226px" />
                <label style={{marginTop:'5px'}}>Headphones</label>  
                </Col>
                         
                <Col id="img" onClick={()=>clicked_item('laptop',history)}>
                <img src={laptop} id="img1" />
                <label style={{marginTop:'5px'}}>Laptop</label>
                </Col>

                <Col id="img" onClick={()=>clicked_item('mobile')}>
                <img src={phone} id="img1" />
                <label style={{marginTop:'5px'}}>Phones</label>
                </Col>

                <Col  id="img" onClick={()=>clicked_item('watch')}>
                <img src={watch} id="img1"/>
                <label style={{marginTop:'5px'}}>Smart Watches</label>
                </Col>
              </Row>
            </Container>     
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Products;

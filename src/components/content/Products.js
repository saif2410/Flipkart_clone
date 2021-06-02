import React from 'react'
import {Card} from 'react-bootstrap'
import {Col} from 'react-bootstrap'
import {Row} from 'react-bootstrap'
import {Container} from 'react-bootstrap'

import headphones from '../img_electronics/headphones.png'
import laptop from '../img_electronics/laptop.png'
import phone from '../img_electronics/phone.png'
import watch from '../img_electronics/watch.png'
export const Products = () => {
    return (
        <div>
            <Card style={{height:'auto',marginTop:'30px',width:'auto',marginLeft:'20px',marginRight:'20px',borderColor:'crimson',borderWidth:'2px'}} >
    <Card.Header style={{backgroundColor:'crimson',textAlign:'center',color:'white',fontSize:'25px',fontFamily:'Lucida Console',borderColor:'rgb(43, 49, 47)',borderWidth:'3px'}}>Elecdivonics and Accesories</Card.Header>
    <Card.Body >
          <Card.Text>
               <Container >
                    <Row>        
                         <Col id="img">
                        
                         <img src={headphones} height="226px" />
                         <label style={{marginTop:'5px'}}>Headphones</label>  
                         </Col>
                         
                         <Col id="img">
                       <img src={laptop} id="img1" />
                       <label style={{marginTop:'5px'}}>Laptop</label>
                         </Col>

                         <Col id="img">
                       <img src={phone} id="img1" />
                       <label style={{marginTop:'5px'}}>Phones</label>
                         </Col>

                         <Col  id="img">
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

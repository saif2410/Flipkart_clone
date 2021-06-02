import React from 'react'
import  second from "./second.png"
import  first from "./first.png"
import  third from "./third.png"
import {Carousel} from 'react-bootstrap';

export const Slider = () => {
    return (
        <div>
                <Carousel>
               <Carousel.Item interval={2000}>
               <img
                    className="d-block w-100"
                    src={first}
                    alt="First slide"
               />
               </Carousel.Item>
               <Carousel.Item interval={2000}>
               <img
                    className="d-block w-100"
                    src={second}
                    alt="Second slide"
               />
               </Carousel.Item>
               <Carousel.Item interval={2000}>
               <img
                    className="d-block w-100"
                    src={third}                   
                    alt="Third slide"
               />
               </Carousel.Item>
          </Carousel>
        </div>
    )
}

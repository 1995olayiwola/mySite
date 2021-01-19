import React from 'react';
import logo from './pos1.jpg';
import logo1 from './pos2.jpg';
import logo2 from './pos3.jpg';
import {Carousel} from'react-bootstrap';
import './Dashboard.css';

import WhatsAppIcon from '@material-ui/icons/WhatsApp';


 
const Dashboard = () => {
  
 
  return (
    <div className="container">
      <Carousel>
  <Carousel.Item>
    <img 
      className="d-block w-100 icon-img"
      src={logo}
      alt="First slide"
    />
    <Carousel.Caption>
      <div className="chat">
      
      
           <a className="link" href="https://wa.me/+2348034600714"> <WhatsAppIcon className="icon"/></a>  
         
     
     </div>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 icon-img"
      src={logo1}
      alt="Third slide"
    />

    <Carousel.Caption>
     <div className="chat">
      
      
           <a className="link" href="https://wa.me/+2348034600714"> <WhatsAppIcon className="icon"/></a>  
         
     
     </div>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 icon-img"
      src={logo2}
      alt="Third slide"
    />

    <Carousel.Caption>
      <div className="chat">
      
      
           <a className="link" href="https://wa.me/+2348034600714"> <WhatsAppIcon className="icon"/></a>  
         
     
     </div>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>


    </div>
     
    
  )
}

export default Dashboard;


import React from 'react';
import {Button,Card} from 'react-bootstrap';
import './Subscribe.css'

const Subscribe = (Props) => {
  
    return(

          <div className="subscribe">
             <div className="subscribe__title">
   <Card style={{ width: '18rem' }}>
  
  <Card.Body>
    <Card.Title>Free plan</Card.Title>
    <Card.Text>
      Welcome, you are eligible to use free plan for a month.
    </Card.Text>
    <Button variant="primary" onClick={()=>{
      
      Props.history.push("/auth")
    }}>Use free plan</Button>
  </Card.Body>
</Card>
</div>
<div className="subscribe__title2">
<Card style={{ width: '18rem' }}>

  <Card.Body>
    <Card.Title>Subscribe</Card.Title>
    <Card.Text>
      Subscribe to keep you logged in.
    
    </Card.Text>
    <Button variant="primary" onClick={()=>Props.history.push("/payment")}>Subscribe now!!!</Button>
  </Card.Body>
</Card>
</div>
    </div>
    )
}

export default Subscribe;

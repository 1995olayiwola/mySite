import React from 'react';
import {Form} from 'react-bootstrap';


function Input(Props) {
    return (
        <div>
             <Form.Group controlId={Props.name} >
             {Props.title && <Form.Label style={{fontWeight:'bold',marginTop:'10px'}}>{Props.title}</Form.Label>}
    
    <Form.Control type={Props.type} placeholder={Props.placeholder} name ={Props.name}  value={Props.value} onChange={Props.handleChange}/>
    {Props.description && <Form.Text className="text-muted">
     {Props.description}
    </Form.Text>}
    
  </Form.Group>
 
        </div>
    )
}

export default Input;

import React from 'react'
import {Form} from 'react-bootstrap';
function Radio(Props) {
    return (
        <div>
           <Form.Label style={{'fontWeight':'bold','marginTop':'10px'}}>

           {Props.title}
           </Form.Label> 
           {Props.options && Props.options.length>0 && Props.options.map( (item,index) => {
     return(<Form.Check 
        type= "radio"
        name = {Props.name}
        key = {index}
        label={item.label}
        value={item.value}
        onChange={Props.handleChange}
        
        />
        
        
       )
           })}
        </div>
    )
}

export default Radio;


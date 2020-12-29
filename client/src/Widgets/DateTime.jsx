import React from 'react';
import{Form}  from 'react-bootstrap';
import DateTimePicker from 'react-datetime-picker'

const DateTime = (Props) => {
    return (
        <Form.Group controlId={Props.name} >
             {Props.title && <Form.Label style={{fontWeight:'bold',marginTop:'10px'}}>{Props.title}</Form.Label>}
    
    <div>
        <DateTimePicker onChange={Props.handleChange} value={Props.value} name={Props.name} />
    </div>
    
  </Form.Group>
  
    )
}

export default DateTime;

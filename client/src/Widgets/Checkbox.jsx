import React from 'react';

import {Form} from 'react-bootstrap';

function Checkbox(Props) {
   const handleChange=(e)=>{
const val = e.target.checked?true:false;
       Props.handleCheckbox(e.target.name,val);
   }
    return (
        <div>
           <Form.Check 
           name={Props.name}
            value={Props.value}
           label={Props.title} 
           onChange={handleChange}
           /></div>
    )
}

export default Checkbox;

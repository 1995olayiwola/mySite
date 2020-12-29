import React from 'react';
import {Form} from 'react-bootstrap'

function CheckBoxInArray({handleCheckbox,name,value,title,options}) {
    const handleChange = (e) =>{
e.persist();
const arr = [...value];
console.log('arr is :',arr);
    }
    return (
        <div>
         <Form.Label style={{fontWeight:'bold',marginTop:'10px'}}>
             {title}
             </Form.Label> 
             {options && options.length > 0 && options.map((item)=>{
return <Form.Check 
key={item.value}
           type="checkbox"
            value={item.value}
           label={item.label} 
           onChange={handleChange}
           />
             })} 
        </div>
    )
}

export default CheckBoxInArray;

import React from 'react';
import Select from 'react-select';



function SingleSelect(Props) {
      
      
    return (
        <div>
            <label style={{fontWeight:"bold"}}>{Props.title}</label>
            <Select options={Props.options}  onChange={Props.handleChange}/>
        </div>
    )
}

export default SingleSelect;

import React from 'react';
import Select from 'react-select';

function MultiSelect(Props) {
    return (
        <div>
            <label style={{fontWeight:"bold"}}>{Props.title}</label>
            <Select options={Props.options}  onChange={Props.handleChange} isMulti className="basic-multi-select"
        classNamePrefix="select"/>
        </div>
    )
}

export default MultiSelect;

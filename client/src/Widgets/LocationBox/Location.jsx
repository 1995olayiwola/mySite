import React from 'react';
import Autocomplete from 'react-google-autocomplete';
import {v4 as uuidv4} from 'uuid';

const Location = (Props) => {
    const {options,value,title,onHandleSelect}=Props;
    const[o,setO]=React.useState(null);
    const locationRef= React.useRef(null);
    
    return (
        <div>
           <div className="form-group " style={{position:'relative'}}>
    {title && <label style={{fontWeight:'bold'}}>{title}</label>}
    <Autocomplete 
    className="form-control"
    id={uuidv4()}
    ref={locationRef}
    defaultValue={value}
    onPlaceSelected={(place)=>{
        console.log('the place selected is',place)
        if(!place.formatted_address){
window.alert('please choose your current address')
return;
        }
        var componentForm={
            street_number:'short_name',
            route:'long_name',
            neighborhood:'long_name',
            locality:'short_name',
            administrative_area_level_2:'short_name',
             administrative_area_level_1:'short_name',
             country:'long_name',
             postal_code:'long_name',
             postal_code_suffix:'short_name'
        };
        const obj= {};
        obj.formatted_address=place.formatted_address;
        obj.lat = place.geometry.location.lat();
        obj.lng = place.geometry.location.lng()
for( let i=0; i<place.address_components.length; i++){
let addressType=place.address_components[i].types[0];
if(!componentForm[ addressType]){
    continue;
}
const key = componentForm[ addressType];
const val =place.address_components[i][key];
if(addressType=='locality'){
    addressType='city';
}else if(addressType=='administrative_area_level_1'){
    addressType='state';
}else if(addressType=='administrative_area_level_2'){
    addressType='county';
}
obj[addressType]=val;

}
console.log('obj is',obj);
onHandleSelect(obj);
setO( obj.formatted_address)
    }}
    types={options}
    />
    {o && <button type="button" style={{fontSize:'24px',position:'absolute',right:'10px',top:'30px',border:'none',background:'transparent'}}
    onClick={()=>{
       onHandleSelect=({});
       setO(null)
       locationRef.current.refs.input.value='';
       locationRef.current.refs.input.focus();
       

    }}
    >
       
        <span>&times;</span>
    </button>}
               </div> 
        </div>
    )
}

    
export default Location;

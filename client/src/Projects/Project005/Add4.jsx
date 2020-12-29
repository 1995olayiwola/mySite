import React from 'react';
import Parse from 'parse';
//import {Link} from 'react-router-dom';
//import Add from './Add';
import moment from 'moment';
import Location from '../../Widgets/LocationBox/Location';
import Input from '../../Widgets/Input'
import renderHTML from 'react-render-html';
import {Button, Table} from 'react-bootstrap'
//import Header from './Header';
 //import Footer from './Footer';

 function Pagination({page_rw,startRow_rw,SetPage_rw,SetStartRow_rw,max,Total_row,Total_pages,url,history}){
     return <div>
         <div>Records {startRow_rw + 1} to {Math.min(startRow_rw + max,Total_row)} of {Total_row}</div>

         <table border="0" align="center" width="50%" cellPadding="5">
<tbody>
    <tr>
        <td><span style={{cursor:'pointer'}} onClick={()=>{
            SetPage_rw(0);
    SetStartRow_rw(0);
      history.push(`${url}/0`)
        }}> First</span></td>
        <td><span  style={{cursor:'pointer'}}  onClick={()=>{
            const prevPage = Math.max(0,page_rw - 1);
    const prevStart = prevPage*max;
    SetPage_rw(prevPage);
    SetStartRow_rw(prevStart);
    history.push(`${url}/${prevPage}`)
        }} >Previous</span></td>
<td><span onClick={()=>{
    const nextPage = Math.min(page_rw + 1,Total_pages);
    const nextStart = nextPage*max;
    SetPage_rw(nextPage);
    SetStartRow_rw(nextStart);
    history.push(`${url}/${nextPage}`)
}} style={{cursor:'pointer'}}>Next</span></td>
        <td><span onClick={()=>{

    const nextStart = Total_pages*max;
    SetPage_rw(Total_pages);
    SetStartRow_rw(nextStart);
    history.push(`${url}/${Total_pages}`)
}} style={{cursor:'pointer'}}>Last</span></td>
      
    </tr>
</tbody>
         </table>
     </div>
 }

 const Add4 =(props)=> {
     const handleChange=(e)=>{
e.persist();
setFormValues((fv)=>{
    return {...fv,[e.target.name]:e.target.value}
})
     };
     console.log('props is',props)
     const[data,setData]=React.useState({
          results:[],
            count:0
     });
     const initialData = {
        location:null,
        keyword:''
    

    };
    const history=props.history;
    const[location,setLocation] = React.useState(null);
    const[keyword,setKeyword] = React.useState(null);
    const[formValues,setFormValues]=React.useState(initialData);
     const max=5;
     const page=props.match.params.pageId ||0;
     const start = page * max;
const[page_rw,SetPage_rw]= React.useState(page);
const[startRow_rw,SetStartRow_rw]= React.useState(start);
const url = '/page';
const Total_row = (data && data.count) ||0;
const Total_pages = Math.ceil(Total_row/max) - 1;
const handleLocationSelect=(name,input)=>{
setFormValues((fV)=>{
return {...fV,[name]:input}
})
   }

     const lat= location && location.lat;
 const lng=location && location.lng;
 let loc= null;
 if(lat && lng){
loc = new Parse.GeoPoint({
    latitude:lat,
    longitude:lng
})
 }
   React.useEffect(()=>{
           
            const process=async()=>{
 const lat= null;
 const lng=null;
 let userLocation= null;
 if(lat && lng){
userLocation = new Parse.GeoPoint({
    latitude:lat,
    longitude:lng,
})
 }
const query = new Parse.Query('TotalInfo5');
if(userLocation){
query.withinMiles('location_geo',userLocation,10000,true)
}else{
    query.descending('createdAt');

}
query.skip(startRow_rw);
query.limit(max);

query.withCount();
const records = await query.find();
await setData(records);
            }
            process();
        },[startRow_rw,lat,lng])
        console.log('data is:',data)
    return (
       <div>
         
<div className="row" style={{marginTop:'10px',marginLeft:'10px',marginRight:'10px',justifyContent:'center',flexWrap:'wrap'}}>
    <div className="col-12"><h3>Search Records</h3>
    <Location 
              title="Enter the  address"
              value={(formValues.location && formValues.location.formatted_address)||''}
              onHandleSelect={handleLocationSelect.bind(this,'location')}
              options=""
              />
              <Input 
              name="keyword"
              title="Keyword"
              placeholder=" Search for keywords"
              value={formValues.keyword}
              handleChange={handleChange.bind('',)}
              />
              <Button type="button" variant="primary"
              onClick={()=>{
                  setLocation(formValues.location);
              }}
              >Search</Button>
    </div>
    <div className="col-12">
        { data.results.length > 0 && (
            <>
<Table striped bordered hover>
  <thead>
    <tr>
      <th>Username</th>
      <th>Phone number</th>
      <th>Pos brand </th>
       <th>Pos fault </th>
      <th>Pos platform</th>
      <th>Gender</th>
      <th>Quantity</th>
      <th>Location</th>
      
    </tr>
  </thead>
  <tbody>
      {data.results.map((item)=>{
          const category = item.get('categories');
          const categoryLabel = category && category.label;
          let distance=null;
          if(loc){
              distance= item.get('location_geo').milesTo(loc).toFixed(2);
          }
          return (
              <tr key={item.id}>
      <td>{item.get('username')}</td>
      <td>{item.get('number')}</td>
      <td>{item.get('brand')}</td>
      <td>{item.get('fault')}</td>
      <td>{item.get('platform')}</td>
      <td>{categoryLabel}</td>
      <td>{renderHTML(item.get('content'))}</td>
      <td>
          <div>{item.get('location').formatted_address}</div>
          <div style={{fontWeight:'bold'}}>{moment(item.get('createdAt')).fromNow()}</div>
         {distance &&  <div style={{fontWeight:'bold'}}>{distance} miles</div>}  
          
      </td>
      
   
      
    </tr>
          );
      })}
    
  
   
  </tbody>
</Table>
<Pagination page_rw={page_rw} startRow_rw={startRow_rw} SetPage_rw={SetPage_rw} 
SetStartRow_rw={SetStartRow_rw} max={max} Total_row={Total_row} Total_pages={Total_pages} url={url} history={history}/>
</>
        )}
        
        
    </div>
    
</div>

       </div>
        
    )
}
export default Add4;
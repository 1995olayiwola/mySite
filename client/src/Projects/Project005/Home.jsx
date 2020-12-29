import React from 'react';
import Parse from 'parse';
//import {Link} from 'react-router-dom';
//import Add from './Add';
import moment from 'moment';
import renderHTML from 'react-render-html';
import {Table} from 'react-bootstrap'

 

 const Home =(props)=> {
     const[data,setData]=React.useState({
          results:[],
            count:0
     });
   React.useEffect(()=>{
           
            const process=async()=>{
const query = new Parse.Query('TotalInfo');
query.descending('createdAt');
query.withCount();
const records = await query.find();
await setData(records);
            }
            process();
        },[])
        console.log('data is:',data)
    return (
       <div>
<div className="row">
    <div className="col-2">left</div>
    <div className="col-10">
        { data.results.length>0 &&(

<Table striped bordered >
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
      {data.results.map((item)=>{
return(
<tr>
      <td>1</td>
      <td>{item.get('content')}</td>
      <td>
          <div>{item.get('location').formatted_address}</div>
<div style={{fontWeight:'bold'}}>{moment(item.get('createdAt')).fromNow()}</div>
          </td>
      <td>{renderHTML(<p>@mdo</p>)}</td>
    </tr>

);
      })}
    
    
  
  </tbody>
</Table>
        )}
        
    </div>
    
</div>
       </div>
        
    )
}
export default Home;
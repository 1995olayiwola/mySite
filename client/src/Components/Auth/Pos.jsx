import React from 'react';
import MyAlert from '../../Utils/MyAlert';
import Parse from 'parse';
import Loading from '../../Utils/Loading';
import {
   Form,
   Button
} from 'react-bootstrap';
import Location from '../../Widgets/LocationBox/Location';
//import {Select} from 'react-select';
import RichTextArea from '../../Widgets/RichTextArea'
import SingleSelect from '../../Widgets/ReactSelect/SingleSelect';
import './Pos.css';
function Pos(props) {
const[number,setNumber]= React.useState(null);
const[number2,setNumber2]= React.useState(null);
   
   const tableName = "TotalInfo6";
   const initialData = {
      location: {},
      content: '',
      categories: null,
      number:number,
      number2:number2,
      username:"",
      platform:"",
      brand:""
  

      
      

   };

   
   const [formValues, setFormValues] = React.useState(initialData);
   const [error, setError] = React.useState(null);
   const [loading, setLoading] = React.useState(false);
  
  
  const handleChangeWithName =(e)=> {
    console.log('onChange fired with value:', +e.target.value);
    setNumber(()=>{
       return (+e.target.value)
    })
  
  }
    const handleChangeWithName3 =(e)=> {
    console.log('onChange fired with value:', +e.target.value);
    setNumber2(()=>{
       return (+e.target.value)
    })
  
  }
    const handleChangeWithName2 =(name,e)=> {
    
    setFormValues(()=>{
       return {
           ...formValues,
           [e.target.name]:e.target.value
       }
    })
  
  }
   

   const handleLocationSelect = (name, input) => {
      setFormValues((fV) => {
         return {
            ...fV,
            [name]: input
         }
      })
   }

   
    

  
 

   const handleChange = (name, val) => {

      console.log('name is', name, 'val is', val)
      setFormValues((fav) => {
         return {
            ...fav,
            [name]: val
         };
      });

      console.log('formValues:', formValues);
   };
   
   const handleSubmit = async (e) => {
      try {
         e.preventDefault();
         e.persist();
         await setLoading(true);
         await setError(null);
         const user = Parse.User.current();
         const Post = Parse.Object.extend(tableName);
         const post = new Post();
         // write ACL code here
         const acl = new Parse.ACL();
         acl.setWriteAccess(user, true);
         //private user read access
         //acl.setReadAccess(user,true);
         
         acl.setPublicReadAccess(true);
         post.setACL(acl);
         //post users
         post.set('location', formValues.location);
         post.set('location_geo',
            new Parse.GeoPoint({
               latitude: formValues.location.lat,
               longitude: formValues.location.lng
            }))
            post.set('content',formValues.content)
            post.set('number',number);
            post.set('number2',number2);
            post.set('username',formValues.username);
            post.set('brand',formValues.brand);
           
            post.set('platform',formValues.platform);
        
   
         post.set('categories', formValues.categories);
         //post.set('location2',formValues.location2);
         //post.set('location_geo_2',2)

         post.set('user', user);
         console.log('post is', post);
         await post.save();
         await setLoading(false);
         props.history.push('/add5');
      } catch (eror) {
         console.log('eror is :', eror);

         await setLoading(false);
         await setError(error.message);
      }
   };
    return (
        <div className="pos">
   

           <Form onSubmit={handleSubmit} >
             <Form.Group controlId="formBasicName">
    <Form.Label className="label">Name</Form.Label>
    <Form.Control type="text" className="input1" placeholder="Enter your name" onChange= {handleChangeWithName2.bind(this,'username')} value={formValues.value} name="username"/>
 </Form.Group>  
<Form.Group controlId="formBasicNumber">
    <Form.Label className="label">Enter Phone number</Form.Label>
    <Form.Control type="number"className="input2" placeholder="Enter your phone number" onChange= {handleChangeWithName} value={number} />
 </Form.Group>
  
 <Form.Group controlId="formBasicAddress">
 <Form.Label className="label">Enter Pos brand</Form.Label>
    <Form.Control type="text" className="input3" placeholder="Enter Pos brand" onChange= {handleChangeWithName2.bind(this,'brand')} value={formValues.value} name="brand"/>
 </Form.Group>
 
 <Form.Group controlId="formBasicAddress">
 <Form.Label className="label">Currently used platform</Form.Label>
    <Form.Control type="text" className="input4" placeholder="Enter your current platform" onChange= {handleChangeWithName2.bind(this,'platform')} value={formValues.value} name="platform" />
 </Form.Group>
 
  

  <SingleSelect title="Gender"  handleChange={handleChange.bind(this,'categories')} options = {[
    { value: 'Male', label: 'Male' },
                    { value: 'Female ', label: 'Female' },
                                                                                      
  ]}
  />
  <RichTextArea 
  handleDescription={handleChange.bind(this,'content')}
   value={formValues.content}
   placeholder="Enter your message"
   title="Reason for requesting new POS"
   
   />
      <Form.Group controlId="formBasicNumber">
    <Form.Label>Enter Average daily withdrawal amount</Form.Label>
    <Form.Control type="number" placeholder="Enter average daily withdrawer amount" onChange= {handleChangeWithName3} value={number2} />
 </Form.Group>  
 <Location 
              title="Enter your current address"
              value={(formValues.location && formValues.location.formatted_address)||''}
              onHandleSelect={handleLocationSelect.bind(this,'location')}
              options=""
              />
               
               
               {error && <MyAlert   message={error}/>}
               {loading && <Loading />}
                <Button variant="primary" type="submit" className="label" >
    Submit
  </Button>
           </Form>
        </div>
    )



     
   }

   export default Pos;

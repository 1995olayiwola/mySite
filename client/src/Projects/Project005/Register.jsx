import React from 'react';
import MyAlert from '../../Utils/MyAlert';
import Parse from 'parse';
import Loading from '../../Utils/Loading';
import {Form,Button} from 'react-bootstrap';
import Location from '../../Widgets/LocationBox/Location';
//import {Select} from 'react-select';
import RichTextArea from '../../Widgets/RichTextArea'
import SingleSelect from '../../Widgets/ReactSelect/SingleSelect';


import DateTime from '../../Widgets/DateTime';


function Add(Props) {
const[number,setNumber]= React.useState(null);

    const tableName = "TestingCheckbox";
    const initialData = {
        startDate:new Date(),
        endDate:new Date(),
        location: {},
      content: '',
      categories: null,
      number:number,
      username:"",
      email:""
        
    };
    const[formValues,setFormValues]=React.useState(initialData);
    const[error,setError]=React.useState(null);
    const[loading,setLoading]=React.useState(false);
const handleChangeWithName =(e)=> {
    console.log('onChange fired with value:', +e.target.value);
    setNumber(()=>{
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

   
    

  
 


   const handleChange=(name,val) =>{
        
       //e.persist();
       setFormValues((fav)=>{
        return {...fav,[name]:val};
       });
   }
    
    const handleSubmit = async(e)=>{
        try{
e.preventDefault();
await setLoading(true);
 await setError(null);
const user = Parse.User.current();
const Post = Parse.Object.extend(tableName);
const post = new Post();
// write ACL code here
const acl= new Parse.ACL();
acl.setWriteAccess(user,true);
//private user read access
acl.setReadAccess(user,true);
//acl.setPublicReadAccess(true);
post.setACL(acl);
//post users
post.set('startDate',formValues.startDate);
post.set('endDate',formValues.endDate);

post.set('user',user);
console.log('post is',post);
await post.save();
await setLoading(false);
Props.history.push('/');
        }catch(eror){
console.log('eror is :' ,eror);

 await setLoading(false);
 await setError(error.message);
        }
    };
    return (
        <div>
  

           <Form onSubmit={handleSubmit}>
   <Form.Group controlId="formBasicName">
   <Form.Label>Name</Form.Label>
    <Form.Control type="text" placeholder="Enter your name" onChange= {handleChangeWithName2.bind(this,'username')} value={formValues.value} name="username"/>
 </Form.Group>  
<Form.Group controlId="formBasicNumber">
    <Form.Label>Enter Phone number</Form.Label>
    <Form.Control type="number" placeholder="Enter your phone number" onChange= {handleChangeWithName} value={number} />
 </Form.Group>
  
 <Form.Group controlId="formBasicAddress">
 <Form.Label>Enter Email</Form.Label>
    <Form.Control type="email" placeholder="Enter Pos brand" onChange= {handleChangeWithName2.bind(this,'email')} value={formValues.value} name="brand"/>
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
   title="Message"
   
   />
    
 <Location 
              title="Enter your current address"
              value={(formValues.location && formValues.location.formatted_address)||''}
              onHandleSelect={handleLocationSelect.bind(this,'location')}
              options=""
              />
               
               <DateTime name="start date" value={formValues.dob} 
                title="Start Date" handleChange={handleChange.bind(this,'dob')}/>
               
               <DateTime name="expire date" value={formValues.activity1} 
                title="End Date" handleChange={handleChange.bind(this,'activity1')}/>
               
               
               {error && <MyAlert   message={error}/>}
               {loading && <Loading />}
               <Button type="submit">Submit</Button>
           </Form>
        </div>
    )
}

export default Add;

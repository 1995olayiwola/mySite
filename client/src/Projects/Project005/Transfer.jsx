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

function Transfer(props) {
const[number,setNumber]= React.useState(null);
   const[number2,setNumber2]= React.useState(null);
   const tableName = "TotalInfo";
   const initialData = {
      location: {},
      content: '',
      categories: null,
      number:number,
      number2:number2,
      

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
   const handleChangeWithName2 =(e)=> {
    console.log('onChange fired with value:', +e.target.value);
    setNumber2(()=>{
       return (+e.target.value)
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
         acl.setReadAccess(user,true);
         
         //acl.setPublicReadAccess(true);
         post.setACL(acl);
         //post users
         post.set('location', formValues.location);
         post.set('location_geo',
            new Parse.GeoPoint({
               latitude: formValues.location.lat,
               longitude: formValues.location.lng
            }))
            post.set('content',formValues.content)
            post.set('number',number)
              post.set('number2',number2)
   
         post.set('categories', formValues.categories);
         //post.set('location2',formValues.location2);
         //post.set('location_geo_2',2)

         post.set('user', user);
         console.log('post is', post);
         await post.save();
         await setLoading(false);
         props.history.push('/add');
      } catch (eror) {
         console.log('eror is :', eror);

         await setLoading(false);
         await setError(error.message);
      }
   };
    return (
        <div>
   

           <Form onSubmit={handleSubmit} >
               
<Form.Group controlId="formBasicNumber">
    <Form.Label>Enter the amount Transfer</Form.Label>
    <Form.Control type="number" placeholder="Enter Amount in #" onChange= {handleChangeWithName} value={number} />
 </Form.Group>
 
 <Form.Group controlId="formBasicNumber">
    <Form.Label>Enter the charges</Form.Label>
    <Form.Control type="number" placeholder="Enter Amount in #"  name="number" onChange= {handleChangeWithName2}  value={number2}/>
 </Form.Group>
  
<SingleSelect title="Choose bank category"  handleChange={handleChange.bind(this,'categories')} options = {[
    { value: 'Gt bank', label: 'Gt bank' },
    { value: 'First bank', label: 'First bank' },
    { value: 'Sterling Bank', label: 'Sterling bank' },
    { value: 'Access Bank', label: 'Access Bank' },
    { value: 'Fidelity Bank', label: 'Fidelity Bank' },
    { value: 'First City Monument Bank', label: 'First City Monument Bank' },
    { value: 'Union Bank ', label: 'Union Bank ' },
    { value: 'United Bank', label: 'United Bank' },
    { value: 'Zenith Bank ', label: 'Zenith Bank ' },
       { value: 'Citibank ', label: 'Citibank ' },
          { value: 'Ecobank', label: 'Ecobank ' },
             { value: 'Heritage Bank ', label: 'Heritage Bank ' },
                { value: 'Keystone Bank ', label: 'Keystone Bank ' },
                   { value: 'Polaris Bank  ', label: 'Polaris Bank  ' },
                      { value: 'Stanbic IBTC Bank ', label: 'Stanbic IBTC Bank ' },
                         { value: 'Standard Chartered ', label: 'Standard Chartered' },
                            { value: ' Titan Trust Bank ', label: 'Titan Trust Bank ' },
                               { value: 'Unity Bank Plc ', label: 'Unity Bank Plc ' },
                                  { value: 'Wema Bank Plc ', label: 'Wema Bank Plc ' },
                                  { value: 'Globus Bank Limited ', label: 'Globus Bank Limited ' },
                                  { value: 'SunTrust Bank Nigeria Limited ', label: 'SunTrust Bank Nigeria Limited ' },
                                  { value: 'Providus Bank Limited', label: 'Providus Bank Limited ' },
                                  { value: 'Jaiz Bank Plc ', label: 'Jaiz Bank Plc ' },
                                    { value: 'TAJBank Limited ', label: 'TAJBank Limited ' },
                                      { value: 'Mutual Trust Microfinance Bank', label: 'Mutual Trust Microfinance Bank ' },
                                        { value: 'Finca Microfinance Bank Limited ', label: 'Finca Microfinance Bank Limited ' },
                                          { value: 'Coronation Merchant Bank', label: 'Coronation Merchant Bank ' },
                                            { value: 'FBNQuest Merchant Bank ', label: 'FBNQuest Merchant Bank' },
                                                                                      { value: 'FSDH Merchant Bank ', label: 'FSDH Merchant Bank' },
                                                                                                                                { value: 'Rand Merchant Bank', label: 'Rand Merchant Bank' },
                                                                                                                                                                          { value: 'Nova Merchant Bank ', label: 'Nova Merchant Bank' }
  ]}
  />
  <RichTextArea 
  handleDescription={handleChange.bind(this,'content')}
   value={formValues.content}
   placeholder="Enter your message"
   title="Message area"
   
   />
        
 <Location 
              title="Enter your current address"
              value={(formValues.location && formValues.location.formatted_address)||''}
              onHandleSelect={handleLocationSelect.bind(this,'location')}
              options=""
              />
               
               
               {error && <MyAlert   message={error}/>}
               {loading && <Loading />}
                <Button variant="primary" type="submit"  >
    Submit
  </Button>
           </Form>
        </div>
    )



     
   }

   export default Transfer;
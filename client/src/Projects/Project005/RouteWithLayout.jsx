import React from 'react';
import {Route,Redirect} from 'react-router-dom';
import Parse from 'parse';

 const Routewithlayout = (Props) =>{
    
const{layout:Layout,component:Component,...rest}=Props;
const user = Parse.User.current();
    return (
       <Route   {...rest} render={(matchProps)=>{
        if(user){
            return (<Layout><Component   user={user} {...matchProps}/></Layout>)   
           }
           
           else{
           return <Redirect to="/auth"/>
           }
       }}/>
    )
}
export default Routewithlayout;
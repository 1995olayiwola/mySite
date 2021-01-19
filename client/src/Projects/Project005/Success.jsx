import React from 'react';
import Parse from 'parse';

const Success = (props) => {
     const history=props.history;
    const user = Parse.User.current();
    return (
        <div className="container">
            <div>
    <h3>Hello, {user && user.get('email')}</h3>  
            </div>
            <div>You have successfully submitted your form, We are processing your request.</div>
            <button onClick={()=>{
                return(
                    history.push("/")
                )
            }}>Click here and return to home page</button>
        </div>
    )
}

export default Success;

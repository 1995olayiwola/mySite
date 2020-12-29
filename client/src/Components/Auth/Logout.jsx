import React from 'react'
import Parse from 'parse';
import './Logout.css'


const Logout =(Props)=> {
    const history = Props.history;
    React.useEffect(()=>{
        const process = async () => {
            await Parse.User.logOut();
            history.push('/auth');
        };
        process();
    },[history])
    return (
        <div className="logout">
          <h1 className="logout_text"> Log out </h1>
          <div className="logout_text">You are successfully logged out from this website!!!</div>
        </div>
    )
}

export default Logout;

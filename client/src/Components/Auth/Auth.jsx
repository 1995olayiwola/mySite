import React from 'react';
import Parse from 'parse';
import './Auth.css';
import MyAlert from '../../Utils/MyAlert';
import Loading from '../../Utils/Loading';
import {Alert} from 'react-bootstrap';
 const Auth = (Props) => {
    console.log(Props);
    const[signUp,setSignUp]= React.useState(false);
    const[LoadingReg,setLoadingReg]= React.useState(false);
    const[LoadingLog,setLoadingLog]= React.useState(false);
    const[regValues,setRegValues]= React.useState({
        email:"",password:"",name:""
    });
    const[logValues,setLogValues]= React.useState({
        email:"",password:""
    });
    const[errLog,setErrLog] = React.useState(null);
    const[errReg,setErrReg] = React.useState(null);
   // const history = Props.history;
    //const userLoggedIn = Parse.User.current;
   /*React.useEffect(()=>{
        if(userLoggedIn){
            history.push('/');
        }
    },[history,userLoggedIn])*/
    
    const handleRegChange = (e) =>{
      
        e.persist();
        setRegValues((val)=>{
return {...val,[e.target.name]:e.target.value};

        });
        console.log('reg values is:',regValues);
    };
    const handleLogChange = (e) =>{
      
        e.persist();
        setLogValues((val)=>{
return {...val,[e.target.name]:e.target.value};

        });
        console.log('Log values is:',logValues);
    };
    let classes ='container';
    if(signUp){
classes = classes+' right-panel-active';
    };
    const handleRegSubmit = async(e) =>{
try{
    e.preventDefault();
    setLoadingReg(true);
    setErrReg(null);
    const user = new Parse.User();
    user.set("username", regValues.email);
    user.set("password", regValues.password);
    user.set("name", regValues.name);
      user.set("name", regValues.number);
    user.set("email", regValues.email);
    user.set('installationId',localStorage.getItem('parse/myAppId/installationId'));
    
    await user.signUp();
    await Parse.User.logOut();
    setSignUp(false);
    setLoadingReg(false);
    setErrReg(null);
    Props.history.push('/');
    console.log('user is :',user);
   
}catch (err) {
    console.log('err is ',err)
    setLoadingReg(false);
    setErrReg(err.message)
}
    };
    const handleLogSubmit = async(e) =>{
        try{
            e.preventDefault();
            setLoadingLog(true);
            setErrLog(null);
           await Parse.User.logIn(logValues.email,logValues.password);
            setLoadingLog(false);
            setErrLog(null);
            Props.history.push('/');
            
           
        }catch (err) {
            console.log('err is ',err);
            if(err.code===209){
                window.alert('i am in the right place');
            }
            setLoadingLog(false);
            setErrLog(err.message)
        }
            };
            const handleForgetPassword = async () =>{
            try{
            
            setLoadingLog(true);
            setErrLog(null);
           if(!logValues.email){
               throw new Error('please enter your email address')
           }
           await Parse.User.requestPasswordReset(logValues.email);
            setLoadingLog(false);
            setErrLog('Email for password reset is sent to you. Please check your email address');
           
            
           
        }catch (err) {
            console.log('err is ',err)
            setLoadingLog(false);
            setErrLog(err.message)
        }

        
            
            };

    return (
        <div className="auth">
         <div className={classes} id="container">
    <div className="form-container sign-up-container">
    <form onSubmit={handleRegSubmit}>
        <h1>Create Account</h1>
        <div className="social-container">
            <a href="/" className="social"><i className="fa fa-facebook"></i></a>
            <a href="/" className="social"><i className="fa fa-google"></i></a>
            <a href="/" className="social"><i className="fa fa-linkedin"></i></a>
        </div>
        <span>or use your email for registration</span>
        <input type="text" placeholder="Name" name="name" value={regValues.name} onChange={handleRegChange}/>
        <input type="email" placeholder="Email"name="email" value={regValues.email} onChange={handleRegChange}/>
        <input type="password" placeholder="Password"name="password"value={regValues.password} onChange={handleRegChange}/>
               
        {errReg && <MyAlert message={errReg} variant="danger"/>}
        {LoadingReg && <Loading />}
        
        <button type="submit">Sign Up</button>
        
    </form>
    </div>
    <div className="form-container sign-in-container">
    <form onSubmit={handleLogSubmit}>
        <h1>Sign in</h1>
        <div className="social-container">
            <a href="/" className="social"><i className="fa fa-facebook"></i></a>
            <a href="/completereact" className="social"><i className="fa fa-google"></i></a>
            <a href="/" className="social"><i className="fa fa-linkedin"></i></a>
        </div>
        <span>or use your account</span>
        <input type="email" placeholder="Email" name="email" value={logValues.email} onChange={handleLogChange} />
        <input type="password" placeholder="Password" name="password" value={logValues.password} onChange={handleLogChange}/>
        <span onClick={handleForgetPassword} style={{cursor:'pointer'}}>Forgot your password?</span>

        {errLog && <MyAlert message={errLog} variant="danger"/>}
        {LoadingLog && <Loading />}
        <button type="submit">Sign In</button>
    </form> 
    </div>
    <div className="overlay-container">
    <div className="overlay">
        <div className="overlay-panel overlay-left">
            <h1>Welcome Back!</h1>
            <p>
                To keep connected with us please login with your personal info
            </p>
            <button className="ghost" id="signIn" onClick={()=>{setSignUp(false)}}>Sign In</button>
        </div>
        <div className="overlay-panel overlay-right">
            <h1>Hello, Friend!</h1>
            <p>Enter your personal details and start journey with us</p>
            <button className="ghost" id="signUp" onClick={()=>{
                setSignUp(true)}}>Sign Up</button>
        </div>
    </div>
    </div>
    </div> 
<div className="alert">
<Alert variant="success">
  <Alert.Heading>Hey, nice to see you</Alert.Heading>
  <p className="text-dark f-bold">
   Please, verify your email,before signing in. 
  </p>
  <hr />
  <p className="mb-0 text-dark f-bold">
   A link will be  sent to your  mail, please check and  verify your email.
  </p>
</Alert>
</div>
        
        </div>

    )
}
export default Auth;

import React from 'react';
//import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import './Dashboard.css';

import WhatsAppIcon from '@material-ui/icons/WhatsApp';


 //import Particles from "react-particles-js";
 //import { particlesOptions } from "./ParticlesOptions";

const Dashboard = () => {
  
  const[timerDays,setTimerDays]=React.useState('00');
    const[timerHours,setTimerHours]=React.useState('00');
      const[timerMinutes,setTimerMinutes]=React.useState('00');
        const[timerSeconds,setTimerSeconds]=React.useState('00');
        let interval=React.useRef();
        const setTimer=()=>{
          const countDownTimer = new Date('January 31,2021 00:00:00').getTime();
          interval= setInterval(()=>{
const now = new Date().getTime();
const distance= countDownTimer - now;
const days =Math.floor(distance/(1000*60*60*24));
const hours =Math.floor((distance % (1000*60*60*24)/(1000*60*60)));
const minutes =Math.floor((distance%(1000*60*60))/(1000*60));
const seconds =Math.floor((distance%(1000*60))/(1000));
if(distance < 0){
clearInterval(interval.current);
}else{
  setTimerDays(days);
  setTimerHours(hours);
  setTimerMinutes(minutes);
  setTimerSeconds(seconds);
}
          },1000)
        };
        React.useEffect(()=>{
          setTimer();
          return()=>{
            clearInterval(interval.current);
          }
        })
  return (
    <div className="container">
     
     <section className="timer__container">
<section className="timer">
  <div>
    <span className="mdi mdi-calender-clock timer-icon">< CalendarTodayIcon/></span>
    <h2>CountDown Timer</h2>

  </div>
  <div>
  
    <section>
      <p>{timerDays}</p>
      <p><small>Days</small></p>
    </section>
    <span>:</span>
    <section>
      <p>{timerHours}</p>
      <p><small>Hours</small></p>
    </section>
    <span>:</span>
    <section>
      <p>{timerMinutes}</p>
      <p><small>Minutes</small></p>
    </section>
    <span>:</span>
  <section>
      <p>{timerSeconds}</p>
      <p><small>Seconds</small></p>
    </section>
    
  </div>
</section>
     </section>
     <div className="chat">
      
      
           <a className="link" href="https://wa.me/+2348034600714"> <WhatsAppIcon/></a>  
         
     
     </div>
    </div>
  )
}

export default Dashboard;

//This is css
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
body{
    font-size: 100%;
}
.timer__container{
background-image: url(./timer.jpg);
background-position: center;
background-size: cover;
background-repeat: no-repeat;
color: blue;
width: 100vh;
height: 100vh;
}
.timer{
    background-color: rgba(0,0,0,0.5);
    display: flex;
    flex-direction:column ;
    align-items: center;
    justify-content: center;
    padding-bottom: 7em;
    padding-top: 2em;
    width: 100%;
    height: 100%;
}
.timer div:first-child{
    text-align: center;
}
.timer-icon {
  font-size: 8em;
}
h2{
    font-weight: 600;
    margin: 0.5em;
}
.timer div:first-child p{
    color:#fafafa;
}
.timer div:last-child  {
   border: 1px solid #ffffff;
   border-radius: 3px;
   display: grid;
   grid-template-columns: repeat(7,1fr);
   margin-top: 3em;
   padding: 3em;
   text-align: center;
}
section p:first-child,.timer div:last-child span{
    font-size: 3em;
}
@media screen and (max-width:480px){
    .timer div:last-child{
        margin-left: 3em;
        margin-right: 3em;
        padding: 3em 3em;
    }
}

    .chat {
        position: absolute;
        right: 45px;
        bottom: 20px;
        font-size: 120px;
        font-weight: 400;

    }
   

   

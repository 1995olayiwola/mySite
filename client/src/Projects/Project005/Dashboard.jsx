import React from 'react';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import './Dashboard.css';

 //import Particles from "react-particles-js";
 //import { particlesOptions } from "./ParticlesOptions";

const Dashboard = () => {
  
  const[timerDays,setTimerDays]=React.useState('00');
    const[timerHours,setTimerHours]=React.useState('00');
      const[timerMinutes,setTimerMinutes]=React.useState('00');
        const[timerSeconds,setTimerSeconds]=React.useState('00');
        let interval=React.useRef();
        const setTimer=()=>{
          const countDownTimer = new Date('December 31,2020 00:00:00').getTime();
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
    <div>
     
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
     
    </div>
  )
}

export default Dashboard;


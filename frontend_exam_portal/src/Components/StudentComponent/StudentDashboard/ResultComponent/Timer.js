import React, { useEffect, useState } from 'react'

export default function Timer() {

      const [seconds, setSeconds] = useState(59);
      const [minutes,setMinutes] = useState(1);
      const [msg,setMsg] =useState("");

      var timer;
      useEffect(() => {
        timer= setInterval(() => {
    setSeconds(seconds-1);
        if(seconds ===0)
        {
          setMinutes(minutes-1);
          setSeconds(59);
        }
    
        },1000)
        
        return () =>clearInterval(timer);
      });
    
  
  return (
    <div   style={{width:"150", height:"150",float:"right", fontFamily:"bold", fontSize:"100%", 
    backgroundColor:"#004d40", color:"white", borderRadius:"20%"
    }}>
    <h3>Time Remaining</h3>
     <center>
       <h3> {minutes <10? "0"+ minutes: minutes} : {seconds<10? "0"+seconds:seconds}</h3>
      
       </center>
      
      </div>
  )
}

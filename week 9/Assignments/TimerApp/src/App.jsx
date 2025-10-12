import React from 'react'
import { useState,useEffect } from 'react';
import "./App.css";

const getformatedTime=(miliseconds)=>{
    let totalSec=parseInt(Math.floor(miliseconds/1000))
    let totalMin =parseInt(Math.floor(totalSec/60))
    let totalHour=parseInt(Math.floor(totalMin/60))
    let totalDays =parseInt(Math.floor(totalHour/24))

    let seconds =parseInt(totalSec%60);
    let minutes =parseInt(totalMin%60)
    let hour =parseInt(totalHour%60)
    let days=parseInt(totalDays%24)

    return`${days} Day :${hour} Hour :${minutes} Minute :${seconds} Second`
}

function App() {
  const [running,isRunning]=useState(false);
  const [editstate,isEditstate]= useState(0);
  const [start ,isStart]=useState(0);
  const [Time,settime]= useState(0)
  
  useEffect(()=>{
      setTimeout(()=>{
      settime(Time-1000);
  },1000);
  },[Time])


  return (
    <div className='App'>

    </div>
  )
} 

export default App

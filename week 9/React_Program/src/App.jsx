import {useEffect, useState } from 'react'
import './App.css'
//useEffect
//learning cleanup, useEffect, learning about depeendency array  
export default function App() {
const [count, setCount1]=useState(0);
const [count2,setCount2]=useState(0);

function increaseCount(){
  setCount1(c=>c+1);
}
function decreaseCount(){
  setCount2(c=>c-1);
}

return <div>
  <Counter count={count} count2={count2}/>
  <button onClick={increaseCount}>Home</button>
  <button onClick={decreaseCount}>Notification</button>
</div>
}

function Counter(props){

useEffect(function(){
  console.log("Mount")

  return function(){
    console.log("Unmount")}
},[])

useEffect(function(){
  console.log("Count")

  return function(){
    console.log("Count has changed")
  }
},[props.count,props])


return <div>
  Counter1 {props.count} <br />
  Counter2 {props.count2}
</div>
}


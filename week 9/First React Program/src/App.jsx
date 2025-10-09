import { useState } from 'react'
import './App.css'
import { PostComponent } from './post' 
import { useEffect } from 'react';

function App() {
const [posts,setPosts] =useState([]);

//post components
const PostComponents = posts.map(posts=><PostComponent 
  img={posts.img}
  title={posts.title}
  subtitle={posts.subtitle}
  time={posts.time}
  description={posts.description}
  />)

function addPost(){
  setPosts([...posts,{img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF0MWytamEcH7p5MlYUSsY76ZAWR-OF9Ngjg&s",
  title:"Kratos",
  subtitle:"30k",
  time:"1m ago",
  description:"God of WAR !!"}])
}

//count notification
const [count,setCount]=useState(1);
function increaseCount(){
  setCount(function(current_value){
    return current_value+1
  })
}
const [tab,setTab]=useState(1)
const [tabData,setTabData]=useState({})
const [loading,setLoading]=useState(true)

useEffect(()=>{
  setLoading(true)
  console.log("Backend Request to get data from Tab "+tab)
  fetch('https://jsonplaceholder.typicode.com/todos/'+tab)
      .then(async res=>{
        const json =await res.json();
        setTabData(json)
        setLoading(false)
      })
},[tab])

return (
<div style={{backgroundColor:"#bdc3c7",height:"100vh"}}>  
  <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
    <button onClick={addPost}>Add Post</button>
    <div>
      {PostComponents}
    </div>
    <div>
      <div style={{display:'flex'}}>
      <div style={{backgroundColor:"red",borderRadius:30,width:18,height:18,marginLeft:12,padding:3}}>{count}</div>
    </div>
      <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEb6uy-H7X04yXAn_M9U3YpADkFVQZ5h5YfKd4EUpY6biPUBKacS2LXLN0i3g9fEeMX3A&usqp=CAU"} width={19} style={{
      cursor:'pointer'}}/>
      <button onClick={increaseCount}>Increase</button>
    </div>
  </div>
    <div style={{display:"flex",justifyContent:"center"}}>
      <button onClick={()=>{setTab(1)}} style={{color: tab==1 ? "red" :"black"}}>Home</button>
      <button onClick={()=>{setTab(2)}} style={{color: tab==2 ? "red" :"black"}}>Notifications</button>
      <button onClick={()=>{setTab(3)}} style={{color: tab==3 ? "red" :"black"}}>Messages</button>
      <button onClick={()=>{setTab(4)}} style={{color: tab==4 ? "red" :"black"}}>Jobs</button>
    </div> 
    <div style={{display:"flex",justifyContent:"center"}}>{ loading ? "Loading" : tabData.title}</div>
</div>
)
}


export default App

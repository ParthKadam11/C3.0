import { useState } from "react"
const style={
padding:20,
width:400,
height:120,
backgroundColor:"White",
borderRadius:15,
borderColor:"Grey",
borderWidth: 1
}
const buttonStyle={
color:"#f5f6fa",
background:"#00a8ff",
borderColor:"#f5f6fa",
borderRadius:12,
marginLeft:120,
height:35,
width:90,
}


export function PostComponent({img,title,subtitle,time,description}){
const [isVisible, setVisible]= useState(false)
return<div style={style}> 
<div style={{display:"flex"}}>
  <img src={img} style={{
      width:60,
      height:60,
      borderRadius:30
  }}/>

  <div style={{fontSize:17,fontFamily:"arial",marginLeft:10}}>
      <b>{title}</b> 
<div style={{color:"#7f8fa6"}}>{subtitle}</div>
      {(time !== undefined) ? <div style={{display:"flex"}}>
      <div style={{color:"#718093"}}>{time}</div>
      <div><img src="https://icons.veryicon.com/png/o/commerce-shopping/jkd_wap/clock-137.png"  style={{width:10,height:10}}/></div>  
</div>:null}
</div>
    <button onClick={()=>{setVisible(!isVisible)}} style={buttonStyle} >Follow</button>
    {isVisible && <h1 style={{fontSize:10}}> You have follow this person </h1>}    
</div>      
<div style={{fontSize:20,fontFamily:"arial",margin:15}}>{description}</div>
</div>
}

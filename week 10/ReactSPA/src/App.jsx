import { useRef, useState } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route, Link, Outlet/* useNavigate */} from 'react-router-dom' 
import Chat from './chat'

function App() {
  
return (
    <> 
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Layout/>}>
          <Route  path='/' element={<Landing/>}/>
            <Route path='/coaching'>
              <Route  path='/coaching/jee' element={<Coaching/>}/>
              <Route  path='/coaching/neet' element={<Coaching2/>}/>
            </Route>
          <Route  path='*' element={<ErrorPage/>}/>
        </Route>
    </Routes>    
    </BrowserRouter>
    </>
  )
}

function Header(){
  return<div>
    <Link to='/'> Landing </Link> |
    <Link to='/coaching/jee'> JEE </Link> |
    <Link to='/coaching/neet'> Neet </Link> <br />
  </div>
}
function Layout(){
  const inputRef = useRef();
  function Focus(){
    inputRef.current.focus();
  }
  return <div style={{height:"90vh"}}>
    <Header/>
    <Chat />
    <div style={{height:"70vh"}}>
    <Outlet/></div>
    
    Footer
  </div>
}
function Clock(){
  const [timer,setTimer]=useState(0)
  const time=useRef()
  function start(){
    let value=setInterval(() => {
      setTimer(c=>c+1)
    }, 1000);
    time.current=value
  }
  function stop(){
    console.log(time.current)
    clearInterval(time.current)
  }
  return <>
  <br />
  {timer} <br />
  <button onClick={start}>Start</button>
  <button onClick={stop}>Stop</button>
  </>
}
function ErrorPage(){
  return <>
  Content Not Found
  </>
}

function Landing(){
  return <>
  Landing Page of Coaching Center <br />
</>
} 
function Coaching(){
  return <>
    IIT/JEE Coaching Center <br /> 
  </>
}
function Coaching2(){
  return <>
  NEET Coaching Center <br />

  </>
}

export default App

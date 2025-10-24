import { createContext, useContext } from "react";
import { useState } from "react"

const Bulbcontext = createContext()

function App() {
  const [Bulb ,setBulb]=useState(false);
  return <div>
    <Bulbcontext.Provider value={{
      Bulb:Bulb,
      setBulb:setBulb
    }}>
      <Lightbulb/>
    </Bulbcontext.Provider>
  </div>
}

function Lightbulb(){
  return <div>
    <BulbState />
    <ToggleBulbState  />
  </div>
}

function BulbState(){
const {Bulb}=useContext(Bulbcontext)
return <div>
  {Bulb ? <img src="/public/bulb.png"></img> : <img src="/public/bulbOff.png"></img>}
  </div>
}

function ToggleBulbState(){
  const {Bulb,setBulb} =useContext(Bulbcontext)
  function toggle(){
  //setBulb(currentState=>!currentState)
  setBulb(!Bulb)
}
  return <div>
    <button onClick={toggle}>Toggle The Button</button>
  </div>
}
export default App

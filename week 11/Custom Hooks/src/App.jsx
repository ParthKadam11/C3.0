import {  useRef, useState } from "react"
import {useFetch} from "./hooks/fetchHook"
import { usePrevi } from "./hooks/usePrev"

function useDebounce(originalFn){
  const currentValue = useRef()
  const fn=()=>{
    clearTimeout(currentValue.current)
    currentValue.current=setTimeout(originalFn, 200);
  }
  return fn
}

function App() {
  function sendDataBackend(){
    fetch("api.amazon.com/search/")
  }  
  const DebounceFn =useDebounce(sendDataBackend)   
  const [currentPost,setCurrentPost ] = useState(1)
  const {post,loading} = useFetch(`https://jsonplaceholder.typicode.com/posts/${currentPost}`)
  const prev =usePrevi(currentPost)
  if(loading){
    return <div>
      Loading...
    </div>
  }

  return (<div>
    <h1>previous value was {prev}</h1>
    <button onClick={()=> setCurrentPost(1)}>1</button>
    <button onClick={()=> setCurrentPost(2)}>2</button>
    <button onClick={()=> setCurrentPost(3)}>3</button>
    <button onClick={()=> setCurrentPost(4)}>4</button>
    <br />
    <div>
      {JSON.stringify(post)}
    </div>
    <input type="text" onChange={DebounceFn}></input>
  </div>
  )
}

export default App

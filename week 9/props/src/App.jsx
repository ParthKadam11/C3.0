import React from "react"
//Props, Children, lists & Keys
function App() {
//lists & keys 
const todos=[{
    title:"Go to Gym",
    done:true,
    id:1
  },{title:"Go to Home",
    done:false,
    id:2
  }]  
  const todos_components = todos.map(todos=><Todo key={todos.id} title={todos.title} done={todos.done}/>)

  return (<div>
    {todos_components}
    <div>
    <ErrorBoundary>
    <Card1 /> 
    </ErrorBoundary>
    <br />
    <Card2 />
  </div>
  </div>
  
  )
}

function Todo({title,done}){
  //here in return you can use div also the thing used below is called Fragment in React
  return <>
    {title} - {done ?"Done!":"Not Done"}
  </>
}/*
//Error Boundry this is very popular code used as fallback ui when something goes down. Can be used as black box(Copy paste)
class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(Error) {
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        console.error("Error caught:", error, info);
    }

    render() {
        if (this.state.hasError) {
            return <div style={{background:"red",borderRadius:20,padding:12,color:"white"}}>Something Went Wrong</div>
        }

        return this.props.children; 
    }
}
function Card1(){
  //throw new Error("Error While Rendering")
  return <div style={{background:"red",borderRadius:20,padding:12,color:"white"}}>Hi there</div>
}
function Card2(){
  return <div style={{background:"red",borderRadius:20,padding:12,color:"white"}}>Hello There</div>
}
*/
/*
function Card({children}){
return <div style={{background:"white",borderRadius:10,color:"black",padding:10,margin:10}}>
  topbar{children}footer
  </div>
}
*/
export default App

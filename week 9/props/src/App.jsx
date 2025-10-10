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
  </div>
  )
}
function Todo({title,done}){
  return <div>
    {title} - {done ?"Done!":"Not Done"}
  </div>
}
/*
function Card({children}){
return <div style={{background:"white",borderRadius:10,color:"black",padding:10,margin:10}}>
  topbar{children}footer
  </div>
}
*/
export default App

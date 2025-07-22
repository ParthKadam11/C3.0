const express = require('express')
const app = express()
app.use(express.json());


let todos=[];
//GET to see all tasks
app.get('/',(req,res)=>{
    res.json(todos)
})
app.get('/add',(req,res)=>{
    res.json(todos)
})
app.get('/del',(req,res)=>{
    res.json(todos)
})
app.get('/update',(req,res)=>{
    res.json(todos)
})
//Post to add tasks
app.post("/add",(req,res)=>{
const{task}=req.body
const addtodo={id:Date.now(),task}
todos.push(addtodo) 
res.json({ message: "task added", tado:addtodo})
})
//DELETE to delete todo tasks
app.post("/del",(req,res)=>{
    const delid = req.body.id
    if(!delid)return res.status(404).json({error:"No task to Delete"})
    const index = todos.findIndex(todo => todo.id === delid);
    if (index !== -1) {
    todos.splice(index, 1); // remove 1 item
    res.json({ message: "todo deleted", todo: delid });
    } else {
    res.status(404).json({ error: "Todo not found" });
    }
})
//POST to update tasks
app.patch("/update",(req,res)=>{
    const upid = req.body.id
    if(!upid)return res.status(404).json({error:"No task to Update"})
    const index=todos.findIndex((todo) => todo.id === upid)
    const{id,task}=req.body
    if (index !== -1) {
    todos[index].task = task;
    res.json({ message: `todo ${id} is updated`, todo: todos[index] });
    } else {
    res.status(404).json({ error: "Todo not found" });
    }
})

app.listen(3000)


const express =require("express");
const app=express();
const fs = require("fs").promises
const path = require("path");
app.use(express.json());

//GET to show todos
app.get('/', async (req, res) => {
    try {
        const data = await fs.readFile(path.join(__dirname, "data.json"), "utf-8");
        const todos = JSON.parse(data);
        res.json(todos);
    } catch (error) {
        console.error("Failed to read todos:", error.message);
        res.status(500).json({ error: "Failed to fetch todos", details: error.message });
    }
});
app.get('/add', async (req, res) => {
    try {
        const data = await fs.readFile(path.join(__dirname, "data.json"), "utf-8");
        const todos = JSON.parse(data);
        res.json(todos);
    } catch (error) {
        console.error("Failed to read todos:", error.message);
        res.status(500).json({ error: "Failed to fetch todos", details: error.message });
    }
});
app.get('/update', async (req, res) => {
    try {
        const data = await fs.readFile(path.join(__dirname, "data.json"), "utf-8");
        const todos = JSON.parse(data);
        res.json(todos);
    } catch (error) {
        console.error("Failed to read todos:", error.message);
        res.status(500).json({ error: "Failed to fetch todos", details: error.message });
    }
});
app.get('/delete', async (req, res) => {
    try {
        const data = await fs.readFile(path.join(__dirname, "data.json"), "utf-8");
        const todos = JSON.parse(data);
        res.json(todos);
    } catch (error) {
        console.error("Failed to read todos:", error.message);
        res.status(500).json({ error: "Failed to fetch todos", details: error.message });
    }
});
//POST for adding todo
app.post('/add',async (req,res)=>{
    try{
    const data = await fs.readFile(path.join(__dirname,"/data.json"),'utf-8')
    const todo_object = JSON.parse(data)
    const{task}=req.body
    const addtodo={id:Date.now(),task}
    todo_object.push(addtodo)
    await fs.writeFile("./data.json",JSON.stringify(todo_object,null,2))
    res.json({message:"to-do added",todo:addtodo})}
    catch(error){
        console.error("DATA is not stored in JSON FILE",error.message);
        res.status(500).json({error:"failed in storing data in JSON File",details:error.message})
    }
})
//Patch for Updating TODO
app.patch('/update',async (req,res)=>{
    try{
        const data = await fs.readFile(path.join(__dirname,"/data.json"),'utf-8')
        const todo_object=JSON.parse(data)
        const updateid=req.body.id
        const updatetask=req.body.task
        if(!updateid || !updatetask) return res.status(404).json("No tasks to update")
        const index = todo_object.findIndex((todo)=>todo.id==updateid)
        const{id,task}=req.body
        if(index!=-1){
            todo_object[index].task=task
            await fs.writeFile("./data.json",JSON.stringify(todo_object,null,2))
            res.json({message:`todo ${id} is updated`,todo:todo_object[index]}
            )}
        else {
    res.status(404).json({ error: "Todo not found" });
    }
}
    catch(error){
        console.error("Could Not Update To-Dos",error.message);
        res.status(500).json({error:"failed to update todos",details:error.message})
    }
})
//DELETE for deleting TODO
app.delete('/delete',async(req,res)=>{
    try{
        const data = await fs.readFile(path.join(__dirname,"/data.json"),'utf-8')
        const todo_object = JSON.parse(data)
        const delid = req.body.id
        if(!delid)return res.status(404).json("no todos to delete")
        const index = todo_object.findIndex((todo)=>todo.id==delid)
            if(index != -1){
                todo_object.splice(index,1);
                await fs.writeFile("./data.json",JSON.stringify(todo_object,null,2))
                res.json({ message: "todo deleted", todo: delid });
            } else {
                res.status(404).json({ error: "Todo not found" });
            }
        } catch(error){
            console.error("Could Not delete todos",error.message);
            res.status(500).json({error:"failed to delete todos",details:error.message});
        }
    })
app.listen(3000)
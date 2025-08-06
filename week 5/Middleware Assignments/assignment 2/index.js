const express =require("express")
const app = express()
//CORS library to share the JSON data using cross origin resource sharing
//IT IS NOT ALLOWED IN NODE JS BUT THIS LIBRARY CAN DO THAT IT IS USED TO STORE FRONTEND ON DIFFERENT DOMAIN AND BACKEND ON DIFFERENT DOMAIN 
//const cors=require("cors")

app.use(express.json())
//app.use(cors())

app.get("/",(req,res)=>{//This is hosting the frontend on same Domain
    res.sendFile(__dirname+"/public/index.html")
})

app.post("/",(req,res)=>{
    const b = parseInt(req.body.b)
    const a = parseInt(req.body.a)
    
    res.json({
        answer: a+b
    })
})
app.listen(3000)
const express =require("express");
const jwt = require("jsonwebtoken");
const app = express();
const {UserModel,TodosModel}=require("./db");
const {auth,JWT_SECRET}=require("./auth");
const mongoose=require("mongoose")


mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("Connected to MongoDB");
        // Start server only after a successful database connection
        app.listen(3000, () => {
            console.log("Server listening on port 3000");
        });
    })

app.use(express.json());

app.get("/todos",auth,async function(req,res){
    const userid=req.id
    const todos = await TodosModel.find({ Userid: userid });
    res.json({
        todos
    })
});

app.post("/todo",auth,async function(req,res){
    const userid=req.id
    const todo=req.body.todo
    const status=req.body.status
    await TodosModel.create({
    todo,
    done: status,
    Userid: userid
})
res.json({ message: "Todo created" });

})

app.post("/signup",async function(req,res){
    const email=req.body.email;
    const password=req.body.password
    const name= req.body.name;

    await UserModel.create({
        email:email,
        password:password,
        name:name
    })
    console.log("Added entry in DB");
    res.json({
        message:"You are Signed Up"
    })
});    

app.post("/signin",async function(req,res){
    const email=req.body.email;
    const password=req.body.password

    const user= await UserModel.findOne({
        email:email,
        password:password
    })
    if(user){
        const token=jwt.sign({
            id:user._id.toString()
        },JWT_SECRET)
        res.json({
            message:token
        })
    }else{
        res.status(403).json({
            message:"Incorrect Credentials"
        })
    }
});   


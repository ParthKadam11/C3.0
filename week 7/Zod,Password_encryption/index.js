const express =require("express");
const jwt = require("jsonwebtoken");
const app = express();
const {UserModel,TodosModel}=require("./db");
const {auth}=require("./auth");
const mongoose=require("mongoose")
const dotenv=require('dotenv').config();
const bcrypt=require("bcrypt")
const {z} = require("zod");


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
        todos:todos.todo
    })
});

app.post("/todo",auth,async function(req,res){
    const userid=req.id
    const todo=req.body.todo
    const status=req.body.status
    await TodosModel.create({
    todo:todo,
    done: status,
    Userid: userid
})
res.json({ message: "Todo created" });

})

app.post("/signup",async function(req,res){
    const email=req.body.email;
    const password=req.body.password
    const name= req.body.name;

    const requiredbody=z.object({
        email:z.email().min(5).max(50),
        name:z.string().min(5).max(50),
        password:z.string()
        .min(5)
        .max(50)
        .regex(/[A-Z]/,{message:"the password must be A-Z"})
        .regex(/[a-z]/,{message:"the password must be a-z"})
        .regex(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>/?`~]/, {message: "Password must contain at least one symbol."})
    })

    
    //const parsedata=requiredbody.safeParse(req.body)  (we can use this but it can throw error so we have to use try catch)
    const parsedata=requiredbody.safeParse(req.body)   //this does not throw error because it returns an object hence named safeparse

    if(!parsedata.success){
        res.json({
            message:"Incorrect format",
            Error:parsedata.error

        })
    return
    }

    let iserror=false
    try{
        const hashed_password=await bcrypt.hash(password,5)
        await UserModel.create({
        email:email,
        password:hashed_password,
        name:name
        })
       }
    catch(err){
        console.log("Error While Entering Data in DB")
        res.json({
            message:"User with same e-mail or name exists"
        })
        iserror=true;
    }
    if(!iserror){
         res.json({
            message:"You are Signed Up"
        })
    }
});    

app.post("/signin",async function(req,res){
    const email=req.body.email;
    const password=req.body.password

    const response= await UserModel.findOne({
        email:email,
    })

    if(!response){
        res.status(403).json({
            message:"No User Found in the Database"
        })
    }
    const password_match=await bcrypt.compare(password,response.password);

    if(password_match){
        const token=jwt.sign({
            id:response._id.toString()
        },process.env.JWT_SECRET)
        res.json({
            token:token
        })
    }else{
        res.status(403).json({
            message:"Incorrect Credentials"
        })
    }
});   

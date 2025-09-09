const express = require("express");
const app = express()
const jwt = require("jsonwebtoken")
const JWT_SECRET ="randomjwtsecret"

app.use(express.json())

const users=[]
app.post("/signup",function(req,res){
    const usernames=req.body.username;
    const passwords=req.body.password
    users.push(
    {
        username:usernames,
        password:passwords
    }),
    res.json({
        message:"You are signed in"
    })
});

app.post("/signin",function(req,res){
    const username=req.body.username
    const password=req.body.password
    const user=users.find((u)=>{
        if(u.username==username && u.password==password){
            return true
        }else return false;
    })
    if(user){
        const token= jwt.sign({
            username: username
        }
        ,JWT_SECRET)   //Used jwt token to replace generate token function               
        user.token=token
        res.json({
            message:`${token}`
        })
    }
    else res.json({
        message:"No user found"
    })
})

app.get("/me",function(req,res){
    const token = req.headers.token;
    const DecodedInformation= jwt.verify(token,JWT_SECRET)  /// {username:"Yourusername"}
    const username = DecodedInformation.username

    let founduser=null;
    for(let i=0;i<users.length;i++){
        if(users[i].username==username){
            founduser=users[i]
        }
    }
    if(founduser){
        res.json({
            username: founduser.username,
            password: founduser.password
        })
    }else{
        res.json({
            message:"Token Invalid, The User is Not Found!"
        })
    }
})
app.listen(3000);


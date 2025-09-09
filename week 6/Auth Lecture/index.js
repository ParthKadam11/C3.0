const express = require("express");
const app = express()

app.use(express.json())

function generateToken() {
    let options = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    let token = "";
    for (let i = 0; i < 32; i++) {
        token += options[Math.floor(Math.random() * options.length)];
    }
    return token;
}

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
        const token=generateToken()
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
    let founduser=null;
    for(let i=0;i<users.length;i++){
        if(users[i].token==token){
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
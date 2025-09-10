const express = require("express")
const jwt = require("jsonwebtoken")
const path=require("path")
const app = express()
const JWT_SECRET = "this is a jwt secret";

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

const users=[]

const auth = function (req, res, next) {
    const token = req.headers.token;
    if (token) {
        try {
            const decoded = jwt.verify(token, JWT_SECRET); 
            req.username = decoded.username; 
            next();
        } catch (err) {
            res.status(401).send({ message: "No JWT found Create New Account" });
        }
    } else {
        res.status(401).send({ message: "You are not permitted to access the account" });
    }
};

function logger(req,res,next){
    console.log(`${req.method} request is send to route ${req.url}`);
    next()
}

//This is used to host Frontend on Same Domain to avoid CORS complexity
app.get("/",function(req,res){
    const filepath= path.join(__dirname,"./public/index.html")
    res.sendFile(filepath)
})

app.post("/signup",logger,function(req,res){
    const username = req.body.username;
    const password = req.body.password;

    users.push({
        username:username,
        password:password})
    
    res.json({
        message:"You are signed up!"
    })
})

app.post("/signin",logger,function(req,res){
    const username=req.body.username;
    const password=req.body.password;

    const user=users.find((u)=>{
        if(u.username==username && u.password==password){
            return true
        }else false
        })
    if(user){
        const token=jwt.sign({
            username:username
        },JWT_SECRET)
        res.json({
            token:token
        })
    }else{
        res.json({
            message:"User Not Found!"
        })
    }
})

app.get("/me",auth,logger,function(req,res){
    let founduser=null;
    for(let i=0;i<users.length;i++){
        if(users[i].username==req.username){
            founduser=users[i]
        }
    }
    if(founduser){
        res.json({
            username: founduser.username,
            password: founduser.password,
            message:"ik this shows credentials"
        })
    }
})

app.listen(3000);
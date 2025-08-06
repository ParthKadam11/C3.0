const express = require("express")
const app = express()

app.get('/sum/:a/:b',function(req,res){
    const vala = parseInt(req.params.a)
    const valb = parseInt(req.params.b)
    res.json({
        ans:vala+valb
    })
})

app.get('/sub/:a/:b',function(req,res){
    const vala = parseInt(req.params.a)
    const valb = parseInt(req.params.b)
    res.json({
        ans:vala-valb
    })
})

app.get('/mul/:a/:b',function(req,res){
    const vala = parseInt(req.params.a)
    const valb = parseInt(req.params.b)
    res.json({
        ans:vala*valb
    })
})

app.get('/div/:a/:b',function(req,res){
    const vala = parseInt(req.params.a)
    const valb = parseInt(req.params.b)
    res.json({
        ans:vala/valb
    })
})

app.listen(3000)

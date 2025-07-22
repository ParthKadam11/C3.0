const express = require('express');
const app = express()

//These Are Route Handlers
//GET request
app.get('/', function (req, res){
  res.send('Hello World')
})

app.get('/route', function (req, res){
  res.send('<h1>This is another route</h1>')
})
//POST request 
app.post('/', function (req, res){
  res.send('This is post request')
})

app.listen(3000)//portsss
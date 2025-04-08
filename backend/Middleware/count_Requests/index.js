const express = require("express");
const app = express();

let count =  0;

app.use(function(req,res,next){
    count = count+1;
    next();
  })
app.get('/user', function(req, res) {
    res.status(200).json({ name: 'john' });
  });
  
  app.post('/user', function(req, res) {
    res.status(200).json({ msg: 'created dummy user' });
  });
  
  app.get('/requestCount', function(req, res) {
    res.status(200).json({ count });
  });
  
app.listen(3000,()=>{
    console.log("server is listening on port 3000");
})
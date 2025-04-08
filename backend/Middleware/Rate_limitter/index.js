const express = require("express")
const app = express();

let numberOfRequestsForUser   = {} ;
setInterval(()=>{
    numberOfRequestsForUser = {};
},5000);


app.use(function(req,res,next){
    const user_id = req.headers["user-id"];
    if(numberOfRequestsForUser[user_id] )  {
        numberOfRequestsForUser[user_id]++;
        if(numberOfRequestsForUser[user_id]>=6){
            return res.status(429).json({
                msg:"Too many request"
            })
        }else{
            next();
        }
    }else{
        numberOfRequestsForUser[user_id] = 1;
        next();
    }
   
})

app.get("/greet",(req,res)=>{
    res.status(200).json({
        msg : `hello buddy, you have made ${numberOfRequestsForUser[req.headers["user-id"]]} requests`
    })
})

app.get("/",(req,res)=>{
    res.send("hello");
})

app.listen(3000,()=>{
    console.log("Server is listening in PORT 3000");
})

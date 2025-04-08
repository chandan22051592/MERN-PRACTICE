const express = require("express");

const app = express();
app.use(express.json());

// function to check age
function isOldEnough(req,res,next){
    const age = req.query.age;
    if(age>=14){
        next();
        return true;
    }else{
        res.json({
            msg:"Sorry you are not Eligible"
        })
    }
    
}
 
app.get("/ride1",isOldEnough,function(req,res){
    res.json({
        msg : "Yoh have riden the ride1"
    });
  
});

 
app.get("/ride1",isOldEnough,function(req,res){
    res.json({
        msg : "Yoh have riden the ride1"
    });
  
});

app.listen(3000,()=>{
    console.log("App is listenign on PORT 3000")
})
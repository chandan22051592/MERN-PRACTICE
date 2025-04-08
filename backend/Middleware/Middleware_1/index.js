const express = require("express")

const app = express();

// app.get("/health-chekup",function(req,res){
//     const kidney = req.query.kidneyId;
//     const user = req.headers.username;
//     const password = req.headers.password;

//     if(!((user == "aman") && (password=="1234"))){
//         res.status(403).json({
//             msg : 'Wrong Credential'
//         });
//         return;
//     };

//     if(!((kidney == 1) || (kidney == 2))){
//         res.status(411).json({
//             msg : "wrong inputs"
//         });
//         return 
//     }

//     res.send("kidney is good !!");

// });




// one route can have multiple callbacks using next() method of express(helps to create chain 1->2->3...);

// app.get("/health-checkup",function(req,res,next){
//     console.log("hello form fnc1");
//     next()
// },function(req,res){
//     console.log("hello from fnc2");
//     res.send("health is Okay !!");
// });



// Now Writing Cleaner Code using Middlewares bcz above code Voilates DRY principle
// pre-checks 

let numberOfRequest = 0;

function calculateRequests(req,res,next){
    numberOfRequest++;
    console.log(numberOfRequest);
    next();

}

function userMiddleware(req,res,next){
    const user = req.headers.username;
    const password = req.headers.password;

    if(!((user == "aman") && (password=="1234"))){
        res.status(403).json({
            msg : 'Wrong Credential'
        });
        return;
    }else{
        next();
    };

}

function kindneyMiddleware(req,res,next){
    const kidney = req.query.kidneyId;

    if(!((kidney == 1) || (kidney == 2))){
        res.status(411).json({
            msg : "wrong inputs"
        });
        return 
    }else{
        next();
    }

}

app.get("/health-checkup1",calculateRequests,function(req,res){

});

app.get("/health-checkup2",calculateRequests,function(req,res){
    
});

app.get("/health-checkup",userMiddleware,kindneyMiddleware,function(req,res){

    res.send("health is Okay !!");


})

app.get("/kidney-checkup",userMiddleware,kindneyMiddleware,function(req,res){

    res.send("kindney  is Okay !!");


})

app.get("/heart-checkup",userMiddleware,function(req,res){

    res.send("heart is Okay !!");


})


app.listen(3000)

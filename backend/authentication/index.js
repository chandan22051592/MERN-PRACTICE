const express = require("express")
const jwt = require("jsonwebtoken")
const app = express();
const jwtpassword = "akamanboss1"

app.use(express.json());



const All_User=[
    {
        username : "aman@gmail.com",
        password : "12345",
        name : "aman gupta"

    },
    {
        username : "harkirat@gmail.com",
        password : "123456",
        name : "harkirat singh"

    },
    {
        username : "shivam@gmail.com",
        password : "1234567",
        name : "shivam pandey"

    },


];

function userExists(username,password){
    for(let i=0;i<All_User.length;i++){
        if(All_User[i].username == username && All_User[i].password==password){
            return true;
        }
    }
    return false;
}

app.get("/",(req,res)=>{
    res.send({
        msg : "hello"
    })
})
app.post("/signin",(req,res)=>{
    const username = req.body.username;
    const password = req.body.password;

    if(!userExists(username,password)){
        return res.status(403).json({
            msg:"user does'nt exists in our memoryDb"
        });
    }

    var token = jwt.sign({username,password},jwtpassword);
    return res.status(200).json(
        token
    )

})

app.get("/users",(req,res)=>{
    const token = req.headers.authorization;
    try {
        const decoded = jwt.verify(token,jwtpassword);
        const username = decoded.username;
        res.status(200).json(All_User.map(user=>user.username));
    } catch (error) {
        return res.status(403).json({
            msg : "Invalid Token"
        });
        
    }
})



const port = 3000;
app.listen(port,()=>{
    console.log(`listening on port ${port}`);
})


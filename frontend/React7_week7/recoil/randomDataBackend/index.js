const express = require('express');
const app = express();



app.get('/',(req,res)=>{
    const count = {
        networkCount : Math.floor(Math.random() * 100) + 5,
        jobCount : Math.floor(Math.random() * 100) + 1,
        messageCount :Math.floor(Math.random() * 100) + 1 ,
        notificationCount : Math.floor(Math.random() * 100) + 1
    }
    return res.json(count);
})

app.listen(3000,()=>{
    console.log("server Running")
})
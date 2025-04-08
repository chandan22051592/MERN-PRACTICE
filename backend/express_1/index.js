const  express = require("express")

const app = express()


function calcSum(n){
    ans =0;
    for(i =0;i<=n;i++){
        ans = ans +  i;
    }
    return ans;
}

app.get("/",function(req,res){
    const n = req.query.n;
    const ans = calcSum(n);
    res.send("hello your answer is :" + ans);


})

app.listen(3000)
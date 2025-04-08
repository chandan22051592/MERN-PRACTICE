const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url === '/bye'){
        res.writeHead(200,{'content-type':'text/plain'});
        res.end('Bye\n');
        return;
    }

    res.writeHead(200,{'content-type':'text/plain'});
    res.end('helloo buddy');
})

server.listen(3000,()=>{
    console.log("server is running on port 3000");
})
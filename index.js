const http = require("http");

const myserver = http.createServer((req,res)=>{
    console.log("server request is comming");
    res.end("hello from server");
});

myserver.listen(8000,() => console.log("server is running"));

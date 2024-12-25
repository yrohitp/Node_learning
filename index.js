const http = require("http");

const fs = require("fs");

const myserver = http.createServer((req,res)=>{
    const log = `${Date.now()}; New Req Recieved\n`;
    fs.appendFile("log.txt",log,(err,data) => {
        res.end('Hello fronm server Again')
    }); 

    console.log("server request is comming");
    res.end("hello from server");
});

myserver.listen(8000,() => console.log("server is running on 8000"));

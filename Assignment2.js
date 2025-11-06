import http from "http";
import fs from "fs";
const server=http.createServer((req,res)=> {
    fs.readFile("data.json","utf-8",(err,data) => {
        if(err){
            res.writeHead(500,{"Content-Type":"application/json"});
            res.end(JSON,stringify({error:"Error reading JSON file"}));
            return;
        }
        res.writeHead(200,{"Content-Type":"application/json"});
        res.end(data);
    });
});
server.listen(4000,()=>{
    console.log("Server running at http://localhost:4000");
})
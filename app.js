const http=require('http');
const fs=require('fs');
const { buffer } = require('stream/consumers');
const server=http.createServer((req,res)=>{
    const url=req.url;
    const method=req.method;
    if(url==='/'){
        
        fs.readFile('message.txt','utf-8',(err,data)=>{
            res.setHeader('Content-Type','text/html');
            res.write('<html>');
        res.write(`<body> <p>${data}</p><br><form action ="/message" method="POST" ><input type="text" name="message"><button type="submit">Send</button></form></body>`);
        res.write('</html>');
       
        
        return res.end();
        
            
            
        })
        
        
        


    }
    if(url==='/message'&& method==='POST'){
        const body=[];
        req.on('data',(chunk)=> {
            body.push(chunk);
        });
        req.on('end',()=>{

            const parsedBody=Buffer.concat(body).toString();
            const message=parsedBody.split('=')[1];
            console.log(message);
            fs.writeFile('message.txt',message,(err)=>{
                res.statusCode=302;
                res.setHeader('Location','/');
                return res.end();});

            
            
        });
    }
    
});
    
   
server.listen(8000);

const http=require('http');
const server=http.createServer((req,res)=>{
    if(req.url==='/home'){
        res.setHeader('Content-Type','text/html');
        res.write('<html>');
        res.write('<body> <h1>Welcome home</h1></body>');
        res.write('</html>');
        


    }
    if(req.url==='/about'){
        res.setHeader('Content-Type','text/html');
        res.write('<html>');
        res.write('<body> <h1> Welcome to About Us page</h1></body>');
        res.write('</html>');
        
    }
    if(req.url==='/node'){
        res.setHeader('Content-Type','text/html');
        res.write('<html>');
        res.write('<body> <h1>Welcome to my Node Js project</h1></body>');
        res.write('</html>');
        
    }
    res.end();
    

   
    
});
server.listen(8000);
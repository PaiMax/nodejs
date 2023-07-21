//const http=require('http');
//const routes=require('./routes');
const express=require('express');
const app=express();

app.use((req,res,next)=>{  
    console.log('middleware 1');   
    next();                                   

})//allow us to add new middleware function

app.use((req,res,next)=>{  
    console.log('middleware 2');
    res.send('<h1>hello express</h1>');                                 

})


//const server=http.createServer(app);
    
   
//server.listen(8000);
app.listen(8000);

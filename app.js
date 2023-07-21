//const http=require('http');
//const routes=require('./routes');
const express=require('express');
const app=express();
const bodyparser=require('body-parser');
app.use(bodyparser.urlencoded({extended: false}));
app.use('/add-product',(req,res,next)=>{  
     res.send('<form action="/product" method="POST"> <input type="text" name="title"><input type="number" name="product-size"><button type="submit">Add Product</button></form>');                                 

})

app.post('/product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
})


app.use('/',(req,res,next)=>{  
   next();                                   

})//allow us to add new middleware function

app.use((req,res,next)=>{  
    
    res.send('<h1>hello express</h1>');                                 

})


//const server=http.createServer(app);
    
   
//server.listen(8000);
app.listen(8000);

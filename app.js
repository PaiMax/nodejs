//const http=require('http');
//const routes=require('./routes');
const express=require('express');
const app=express();
const adminRoutes=require('./routes/admin');
const shopRoutes=require('./routes/shop');
const bodyparser=require('body-parser');
app.use(bodyparser.urlencoded({extended: false}));
app.use('/admin',adminRoutes);
app.use('/shop',shopRoutes);
app.use((req,res,next)=>{
    res.status(404).send('<h1>page not found</h1>');
})







//const server=http.createServer(app);
    
   
//server.listen(8000);
app.listen(8000);

//const http=require('http');
//const routes=require('./routes');
const express=require('express');
const app=express();
const path=require('path');

const adminRoutes=require('./routes/admin');
const shopRoutes=require('./routes/shop');
const bodyparser=require('body-parser');
const contactRoute=require('./routes/contactus');
const sucessRoute=require('./routes/sucess');
app.use(express.static(path.join(__dirname,'public'))); 
app.use(express.static(path.join(__dirname,'images')));
app.use(bodyparser.urlencoded({extended: false}));
app.use('/admin',adminRoutes);
app.use('/',shopRoutes);
app.use('/contactus',contactRoute);
app.use('/success',sucessRoute);

app.use((req,res,next)=>{
    
    res.status(404).sendFile(path.join(__dirname,'views','pageNotFound.html')); 

})








//const server=http.createServer(app);
    
   
//server.listen(8000);
app.listen(8000);

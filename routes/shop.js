const express=require('express');
const router=express.Router();
router.get('/',(req,res,next)=>{
    res.send('<h1>hello this is shope home page</h1>');
});

module.exports=router;
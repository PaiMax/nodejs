const express=require('express');
const router=express.Router();
const path=require('path');
router.post('/',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'../','views','sucess.html'));
})
module.exports=router;
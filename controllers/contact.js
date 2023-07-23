const path=require('path');
exports.getcontact=(req,res,next)=>{
    res.sendFile(path.join(__dirname,'../','views','contactus.html'));
}
exports.getsucess=(req,res,next)=>{
    res.sendFile(path.join(__dirname,'../','views','sucess.html'));
}
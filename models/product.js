
const fs=require('fs');
const path =require('path');
const p=path.join(__dirname,'../','data','products.json');

const getProducts=(afc)=>{
  
        fs.readFile(p,(err,data)=> {
            if(err){
                return afc([]);
            }
            afc(JSON.parse(data));
        })
       

}

 module.exports=class Product{
    constructor(t) {
        this.title=t;
    }
    save(){
        const p=path.join(__dirname,'../','data','products.json');
        getProducts((products)=>{
            products.push(this);
            fs.writeFile(p,JSON.stringify(products),(err)=>{
                console.log(err);   
            })

        })
       

    }
    
    static fetchAll(afc){
        getProducts(afc);
        
    }
 }
const express=require('express');
const router=express.Router();

router.use(express.json());
router.use(express.urlencoded({extended:true}));
const fs=require('fs');
const rawData = fs.readFileSync('data.json');
const jsonData =JSON.parse(rawData)
router.get('/',(req,res)=>{
    res.send(rawData);

});
router.post('/add',(req,res)=>{
    console.log(req.body);
    res.send(rawData);

});
router.put('/update/:ind',(req,res)=>{
    const index=req.params.ind;
    console.log(index);
    res.send('updated');

});
router.delete('/delete/:ind',(req,res)=>{
    const index=req.params.ind;
    console.log(index);
    res.send('deleted');

});
module.exports=router;

const express=require('express');
const { append } = require('express/lib/response');
const router=express.Router()

router.get('/',(req,res)=>{
    res.send('in articles')
})

module.exports=router;
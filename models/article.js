const mongoose=require('mongoose')
const createdompurify=require('dompurify')
const marked=require('marked')
const {JSDOM}=require('jsdom')
const dompurify=createdompurify(new JSDOM().window)

const arschema=new mongoose.Schema({
title:{
    type:String,
    required:true
},
description:{
    type:String
},
markdown:{
    type:String,
    required:true,
},
createdat:{
    type:Date,
    default:Date.now()
},
// sanitizedhtml:{
//     type:String,
//     required:true
// }
})


// arschema.pre('validate',function(next){
//     if(this.markdown){
//         this.sanitizedhtml=dompurify.sanitize(marked(this.markdown))
//     }
//     next()
// })

module.exports=mongoose.model('Article',arschema)



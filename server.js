const express=require('express')
const app=express()
const articleroute=require('./routes/article')
const mongoose=require('mongoose')
const Article = require('./models/article')
const methodoveride=require('method-override')

app.set('view engine','ejs')


mongoose.connect("mongodb://localhost/blog")

app.use(express.urlencoded({extended:false}))
app.use(methodoveride("_method"))
app.use('/articles',articleroute)

app.get('/',async(req,res)=>{
    const articles= await Article.find().sort({createdat:"desc"})
        
    
    res.render('articles/index',{articles:articles})
})
app.listen(5000)
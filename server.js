const express=require('express')
const app=express()
const articleroute=require('./routes/article')

app.set('view engine','ejs')

app.use('/articles',articleroute)

app.get('/',(req,res)=>{
    const articles=[
        {
            title:"artic",
            createdat:new Date(),
            desccription:"designing"
        },
        {
            title:"artic",
            createdat:new Date(),
            desccription:"designing"
        },

    ]
    res.render('index',{articles:articles})
})
app.listen(5000)
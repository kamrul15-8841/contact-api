const express = require('express')
const app = express()
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoute = require('./routes/user')
const contactRoute = require('./routes/contact')


// mongoose.connect('mongodb+srv://sbs:sbs123@sbs.98ss74j.mongodb.net/?retryWrites=true&w=majority&appName=SBS')
mongoose.connect('mongodb+srv://kamrul:kamrul@kamrul.drwmw.mongodb.net/?retryWrites=true&w=majority&appName=kamrul')
.then(res=>{console.log("connected to database")})
.catch(err=>{console.log(err)})

app.use(bodyParser.json())

app.use('/user',userRoute)
app.use('/contact',contactRoute)


app.use('*',(req,res)=>{
    res.status(404).json({
        msg:'bad request'
    })
})

module.exports = app

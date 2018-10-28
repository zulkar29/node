const express= require('express');
const morgan=require('morgan');
const bodyParser= require('body-parser');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/contacts-db', { useNewUrlParser: true });
mongoose.set('useCreateIndex', true);


const db=mongoose.connection
db.on('error',(err)=>{
    console.log(err);
})

db.once('open',()=>{
    console.log('database connection compited');
})

const contactRoute= require('./api/routes/contact')

const app=express();
app.use(morgan('dev'));
const PORT = process.env.PORT || 3000;

app.use('/api/contact',contactRoute)
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json)

app.listen(PORT,()=>{
    console.log(`server is lichining on port ${PORT}`)
});

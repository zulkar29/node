const express= require('express');
const route= express.Router()

const Contact= require('../models/Contact')
//get Route
route.get('/',(req,res,next)=>{
res.send("<h1>This is H1 Tag</h1>")
})

//post router

route.post('/',(req,res,next)=>{
   
    const contact= new Contact({
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email
    })
    contact.save()
        .then(data=>{
            res.status(201).json({
                message:'contact added',
                contact:data
            })
        })
        .catch(err=>console.log(err))

})


module.exports=route
const mongoose= require('mongoose')

const Schema=mongoose.Schema

const ContactSchema= new Schema({
    name:{
        type:String,
        trim:true,
        minlength:4
    },
    phone:{
        type:String,
        trim:true,
        required:true,
        unique:true
    },
    email:{
        type:String,
        trim:true        
    }
});

const Contact=mongoose.model('contact',ContactSchema)
module.exports=Contact
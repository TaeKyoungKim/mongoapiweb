var mongoose = require('mongoose')

var contactSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    gender:String ,
    phone:String,
    create_date:{
        type:Date,
        default:Date.now
    }
})

const dataSchema = new mongoose.Schema({
    id:String,
    title:String,
    status:String
    },
    {
        timestamps:true
    }
)

var Contact =mongoose.model('contact',contactSchema );
var TodoContact =  mongoose.model('fetchdata' , dataSchema)

module.exports = {Contact:Contact, TodoContact: TodoContact}

module.exports.get = (callback, limit)=>{
    Contact.find(callback).limit(limit)
}

module.exports.getTodo = (callback, limit)=>{
    Contact.find(callback).limit(limit)
}
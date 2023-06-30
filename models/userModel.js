const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firstName : {
        type: String,
        required: true
    },
    lastName : {
        type: String,
        required: true
    },
    email : {
        type: String,
        required: [true,'email is required'],
        unique:[true,"Duplicate Email"]
    },
    gender : {
        type: String,
        required: true
    },
    jobTitle: {
        type: String,
    },
},{timestamps:true})

const userModel = mongoose.model('User',userSchema)

module.exports = userModel
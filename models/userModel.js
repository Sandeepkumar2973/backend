const mongoose = require('mongoose');

const  userSchema = new mongoose.Schema({
    name:{
        type : String,
        required: [true, 'name is reuire']
    },
    email:{
        type: String,
        required:[true, 'email is required']
    },
    mobile:{
        type:String,
        required:[true, 'mobile is require']
    },
    message:{
        type:String,
        required:[true, 'mobile is require']
    }    

})

const userModel = mongoose.model('users', userSchema)

module.exports = userModel;
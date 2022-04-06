
const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
    {
        fullName:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true
        },
        password:{
            type:String,
            required:true
        },
        cpassword:{
            type:String,
            required:true
        },
        mobileNum:{
          type:Number,
          required:true,
          unique:true  
        },
        isAdmin:{
            type:Boolean,
            default:false
        }
    }
)

module.exports = mongoose.model('User',userSchema)
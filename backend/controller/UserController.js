
const { json } = require('express/lib/response')
const res = require('express/lib/response')
const User = require('../models/User')

const getUser = async(req,res)=>{
       try {
           const users = await User.find()
        res.status(201).json({
            success:true,
            users
        })
       } catch (error) {
          res.status(400).json({
              success:false,
              message:error.message
          }) 
       }
}

//create new user
const postUser = async(req,res)=>{
    const {fullName,email,password,cpassword,mobileNum} = req.body;
    if(!fullName|| !email|| !password|| !cpassword|| !mobileNum){
        res.status(400).json({
            success:false,
            error:"Please Fill all the field properly"
        })
    }

    try {
        const mobileExits = await User.findOne({mobileNum:mobileNum});
        if(mobileExits){
            res.status(402).json({
                success:false,
                error:"Phone Number Already Exist"
            })
        }
        const user = new User({fullName,email,password,cpassword,mobileNum});
        await user.save();
        res.status(201).json({
            success:true,
            message:"User Register Successfully",
            user
        })

    } catch (error) {
        res.status(404),json({
            success:false,
            error:"data not send properly"
        })
    }

}

module.exports = {
    getUser,
    postUser
}

const userModel=require("../models/user.model")
const jwt=require("jsonwebtoken")

async function registerUser(req,res){
    const {username,email,password}=req.body

    const isUserAlreadyExists=await userModel.findOne({
        email
    })
    if(isUserAlreadyExists){
        return res.status(409).json({
            message:"User already exists"
        })
    }
    const user =await userModel.create({
        username,email,password
    })

    //create token  :user data and unique
    const token=jwt.sign({
        id:user._id
    },process.env.JWT_SECRET)

    res.cookie("token",token) //cookie parser
    //stores in cookie because server can access 
    res.status(201).json({
        message:"User registered successfully",
        user
    })
}
module.exports={registerUser}

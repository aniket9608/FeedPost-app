const express=require('express')
const jwt=require("jsonwebtoken")
const router=express.Router()
const userModel=require("../models/user.model")

router.post("/create",async (req,res)=>{
    // console.log(req.body);
    // console.log(req.cookies);
    
    const token=req.cookies.token

    if(!token){
        return res.status(401).json({
            message:"Unathorized"
        })
    }
    try{
        const decoded=jwt.verify(token,process.env.JWT_SECRET)
        const user= await userModel.findOne({
            _id: decoded.id
        })
        console.log(user);
        return res.status(200).json({
            message: "Success!",
            
        });
        
        
    }
    catch(err){
        return res.status(401).json({
            message:"wrong jwt key h"
        })
    }
    
})

module.exports=router

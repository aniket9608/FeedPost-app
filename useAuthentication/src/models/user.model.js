const  mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    username:String,
    email:{
        type:String,
        unique:true
    },
    password:String
})
//create token

 
const userModel=mongoose.model("user",userSchema)

module.exports=userModel
const express=require("express")
const multer =require("multer")
const app=express()
const uploadFile=require("../services/storage.service")
const postModel=require("../models/post.model")
const cors=require("cors") //use cors as middleware  

app.use(cors())
// app.use(express.json()) //for raw data
// npm i multer for form data

const upload=multer({storage:multer.memoryStorage()})

app.post('/createPost',upload.single("Image"), async(req,res)=>{
    console.log(req.file); //buffer is actual size of data
    
    const result=await uploadFile(req.file.buffer)

    const post =await postModel.create({
        image:result.url,
        caption:req.body.caption
    })
    return res.status(201).json({
        message:"post created successfully",
        post
    })
})

app.get('/posts',async(req,res)=>{
    const posts=await postModel.find()

    return res.status(200).json({
        message:"Posts fetched successfully",
        posts
    })
})
module.exports=app
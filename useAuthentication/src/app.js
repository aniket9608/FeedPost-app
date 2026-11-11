
const express=require("express")
const authRoutes=require("./routes/auth.routes")
const cookieParser=require("cookie-parser")
const postRoutes=require("./routes/post.routes")

const app=express()
app.use(express.json())
app.use(cookieParser())
//prefix: /api/auth to use api which created by router
app.use("/api/auth",authRoutes)
app.use("/api/posts",postRoutes)

module.exports=app 
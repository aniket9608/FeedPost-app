
require("dotenv").config() // to access .env files
const app=require("./src/app")
const connectDB=require("./db/db")

connectDB()

app.listen(3000,()=>{
    console.log("Server is running on 3000")
})
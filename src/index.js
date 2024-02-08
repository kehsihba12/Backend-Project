// require('dotenv').config({path:'./env'})
import dotenv from "dotenv";
import connectDB from "./db/index.js";
// import mongoose from "mongoose";
// import  express  from "express";
// const app = express()
dotenv.config({
    path:'./env'
})

connectDB()





// (async () => {
//     try{
//         await mongoose.connect(`${process.env.MONGODB_URI}/${db_name}`)
//         app.on("error",(error) =>{
//             console.log("error",error);
//             throw error
//         })
//         app.listen(process.env.PORT,() =>{
//             console.log(`app listening from port ${process.env.PORT}`);
//         })
//     }
//     catch(error){
//         console.error("Error",error)
//         throw error
//     }

// })() 
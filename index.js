import dotenv from 'dotenv';
dotenv.config();
import express from 'express'
const app=express();
const port=process.env.PORT||4000;
import mongoose from 'mongoose'
(async ()=>{
    try {
        await mongoose.connect(`${process.env.MongoDB_URI}/${process.env.DB_Name}`)
        .then(()=>{
            console.log("connected successfully")
        })
        .catch((error)=>{
            throw error;
        })
        app.on(Error,(error)=>{
            console.error("The error message is:",error);
        })
        app.listen(()=>{
            console.log(`App is listening on ${port}`);
        })
    } catch (error) {
        console.error("The error message reads: ",error);
        throw error;
    }
})()

import express from "express"
import mongoose from "mongoose"

const app = express()

mongoose.set('strictQuery',true)
mongoose.connect(process.env.MONGODB_URL)
    .then(()=>{
        app.listen(3000,()=>{
            console.log('DB CONNECTED\nSERVER RUNNING:3000');
        })
    })
    .catch(({message})=>{
        console.error(`ERROR:\n${message}`);
    })

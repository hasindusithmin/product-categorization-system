
import express from "express"
import mongoose from "mongoose"
import productRouter from "./router/product.js"
import categoryRouter from "./router/category.js"

const app = express()

app.get('/',(req,res)=>{
    res.sendStatus(200)
})

app.use(express.json())

app.use('/product',productRouter)
app.use('/category',categoryRouter)

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


import express from "express"
import mongoose from "mongoose"
import productRouter from "./router/product.js"
import categoryRouter from "./router/category.js"
import fileUpload from "express-fileupload"

const app = express()

app.get('/',(req,res)=>{
    res.sendStatus(200)
})

app.use(express.json())
app.use(fileUpload());
app.use('/uploads',express.static('uploads'))

app.post('/upload', (req, res) => {
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).send('No files were uploaded.');
    }
      let sampleFile = req.files.image;
  
    sampleFile.mv(`./uploads/${Date.now()}_${sampleFile.name}`, function(err) {
      if (err) {
        return res.status(500).send(err);
      }
  
      res.json({DIR:`/uploads/${Date.now()}_${sampleFile.name}`});
    });
  });
  

app.use('/product',productRouter)
app.use('/category',categoryRouter)

mongoose.set('strictQuery',true)
const MONGO_URL = process.env.MONGODB_URL
mongoose.connect(MONGO_URL)
    .then(()=>{
        app.listen(3000,()=>{
            console.log('DB CONNECTED\nSERVER RUNNING:3000');
        })
    })
    .catch(({message})=>{
        console.error(`ERROR:\n${message}`);
    })

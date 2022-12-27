
import mongoose,{Schema} from "mongoose";


const Product = new Schema({
    title:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    subcategory:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    }
})

export default mongoose.models.product || mongoose.model('product',Product)
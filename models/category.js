

import mongoose,{Schema} from "mongoose";


const Category = new Schema({
    name:{
        type:String,
        required:true
    },
    slug:{
        type:Number,
        required:true
    },
    sub:{
        type:[String]
    }
})

export default mongoose.models.category || mongoose.model('category',Category)
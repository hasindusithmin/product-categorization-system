
import { Router } from "express";
import PRODUCT_MODEL from "../models/product.js";

const productRouter = Router()

productRouter.get('/',async(req,res)=>{
    try {
        const PRODUCTS = await PRODUCT_MODEL.find({})
        res.status(200).json(PRODUCTS)
    } catch (error) {
        res.status(500).json({ERROR:error.message})
    }
})

productRouter.get('/:id',async(req,res)=>{
    try {
        const {id} = req.params;
        const PRODUCT = await PRODUCT_MODEL.findById(id)
        if (PRODUCT == null) throw Error("Not found")
        res.status(200).json(PRODUCT)
    } catch (error) {
        res.status(500).json({ERROR:error.message})
    }
})
productRouter.post('/',async(req,res)=>{
    try {
        const {title,price,description,category,subcategory,image} = req.body;
        await PRODUCT_MODEL.create({title,price,description,category,subcategory,image})
        res.sendStatus(201)
    } catch (error) {
        res.status(500).json({ERROR:error.message})
    }
})
productRouter.put('/:id',async(req,res)=>{
    try {
        const {id} = req.params;
        const {title,price,description,maincategory,subcategory,image} = req.body;
        const PRODUCT  = await PRODUCT_MODEL.findByIdAndUpdate(id,{title,price,description,maincategory,subcategory,image})
        if (PRODUCT == null) throw Error("Not found")
        res.sendStatus(200)
    } catch (error) {
        res.status(500).json({ERROR:error.message})
    }
})
productRouter.delete('/:id',async(req,res)=>{
    try {
        const {id} = req.params;
        const PRODUCT = await PRODUCT_MODEL.findByIdAndDelete(id)
        if (PRODUCT == null) throw Error("Not found")
        res.sendStatus(200)
    } catch (error) {
        res.status(500).json({ERROR:error.message})
    }
})

export default productRouter;
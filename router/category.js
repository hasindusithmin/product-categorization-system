

import { Router } from "express";
import CATEGORY_MODEL from "../models/category";

const categoryRouter = Router()

categoryRouter.get('/',async(req,res)=>{
    try {
        const CATEGORIES = await CATEGORY_MODEL.find({})
        res.status(200).json(CATEGORIES)
    } catch (error) {
        res.status(500).json({ERROR:error.message})
    }
})

categoryRouter.get('/:id',async(req,res)=>{
    try {
        const {id} = req.params
        const CATEGORY = await CATEGORY_MODEL.findById(id)
        res.status(200).json(CATEGORY)
    } catch (error) {
        res.status(500).json({ERROR:error.message})
    }
})

categoryRouter.post('/',async(req,res)=>{
    try {
        const {name,slug,sub} = req.body
        await CATEGORY_MODEL.create({name,slug,sub})
        res.sendStatus(201)
    } catch (error) {
        res.status(500).json({ERROR:error.message})
    }
})

categoryRouter.put('/:id',async(req,res)=>{
    try {
        const {id} = req.params
        const {name,slug,sub} = req.body
        await CATEGORY_MODEL.findByIdAndUpdate(id,{name,slug,sub})
        res.sendStatus(200)
    } catch (error) {
        res.status(500).json({ERROR:error.message})
    }
})

categoryRouter.delete('/:id',async(req,res)=>{
    try {
        const {id} = req.params
        await CATEGORY_MODEL.findByIdAndDelete(id)
        res.sendStatus(200)
    } catch (error) {
        res.status(500).json({ERROR:error.message})
    }
})

export default categoryRouter;
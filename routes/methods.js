const express = require('express')
const router = express.Router()
const Method = require('../models/model')

router.get('/',async(req,res)=>{
    try{
        const methods=await Method.find()
        res.json(methods)
    }catch(err){
        res.send("Error"+err)
    }
})

router.get('/:id',async(req,res)=>{
    try{
        const method=await Method.findById(req.params.id)
        res.json(method)
    }catch(err){
        res.send('Error'+err)
    }
})

router.post('/', async(req,res)=>{
    const method=new Method({
    title: req.body.title,
    description: req.body.description
    })
    try{
        const m1=await method.save()
        res.json(m1)
    }catch(err){
        res.send('Error'+err)
    }

})

router.patch('/:id',async(req,res)=>{
    try{
        const method=await Method.findById(req.params.id)
        method.description=req.body.description
        const m1=await method.save()
        res.json(m1)
    }catch(err){
        res.send('Error'+err)
    }
})

router.delete('/:id',async(req,res)=>{
    try{
        const method=await Method.findById(req.params.id)
        method.description=req.body.description
        const m1=await method.remove()
        res.json(m1)
    }catch(err){
        res.send('Error'+err)
    }
}) 

module.exports=router
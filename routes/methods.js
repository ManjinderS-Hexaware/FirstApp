const express = require('express')
const router = express.Router()
const Method = require('../models/model')

router.get('/',async(req,res)=>{
    try{
        const methods=await Method.find()
        if(methods.length>0)
            res.json(methods)
        else
        res.status(404).json({Message:'Add some records to view them'})
    }catch(err){
        res.send("Error"+err)
    }
})

router.get('/:id',async(req,res)=>{
    try{
        const method=await Method.findById(req.params.id)
        if(method!=null)
            res.status(200).json(method)
        else
            res.status(404).json({Erron:'Record does not exist'})
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
        if(m1)
            res.status(201).json(m1)
        else
            res.status(404).send('Could not save record')
    }catch(err){
        res.send('Error'+err)
    }

})

router.patch('/:id',async(req,res)=>{
    try{
        const method=await Method.findById(req.params.id)
        if(method!=null){
        method.description=req.body.description
        const m1=await method.save()
        res.json(m1)
        }
        else{
            res.status(404).json({Message:'User with this ID does not exist'})
        }
    }catch(err){
        res.send('Error'+err)
    }
})

router.delete('/:id',async(req,res)=>{

    Method.findByIdAndRemove(req.params.id, function(err){
        if(err) return res.status(404).json({Meassage:'Could not delete'});
        res.send('Deletion Successful');
    })
    /*
    try{
        const method=await Method.findById(req.params.id)
        //method.description=req.body.description
        const m1=await method.remove()
        res.json(m1)
    }catch(err){
        res.send('Error'+err)
    }*/
}) 

module.exports=router
const mongoose=require('mongoose')

const methodsSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true
    },

    description:{
        type: String,
        required: true
    }    

})   

module.exports=mongoose.model('Method',methodsSchema)

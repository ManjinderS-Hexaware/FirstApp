const express=require('express')
const mongoose =require('mongoose')
const dotenv=require('dotenv')
dotenv.config();

const url= process.env.CONNECTION_STRING;
console.log(url)
const port=process.env.PORT || 9000;

const app=express()

mongoose.connect(url, {
    useNewUrlParser:true, 
    useUnifiedTopology:true,
    useFindAndModify:false
}).then(()=>{
    console.log("Successfully connected to the database");
}).catch(err=>{
    console.log('Could not connect to the database',err);
    process.exit();
});


app.use(express.json())

const methodsRouter=require('./routes/methods')
app.use('/methods',methodsRouter)

app.listen(port, ()=>{
    console.log('Server Connected..')
})
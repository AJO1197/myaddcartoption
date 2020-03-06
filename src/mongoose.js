const mongoose=require('mongoose')

const express=require('express')
const CONNECTION_URL=process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017'
mongoose.connect(CONNECTION_URL+'/productdata',{
    useNewUrlParser:true,
    useCreateIndex:true
})

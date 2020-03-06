require('./mongoose')
const productdetails = require('./productdetails')
const cartdetails = require('./cartdetails')
const mongoose = require('mongoose')


productdetails.find({

},(err,res)=>{

}).then((res)=>{
    date=""+res[0].updatedAt.toDateString()
    console.log(date)

})


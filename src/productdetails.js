const mongoose=require('mongoose')
const timestamps = require('mongoose-timestamp')

const productdetailsschema=new mongoose.Schema({
    title:{
        type: String,
        required:true,
        trim: true
    },
    description:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true,
        default : 0
    },
    filename:{
        type: String,
        required: false,
        default: null

    }
    
})

productdetailsschema.plugin(timestamps)
const productdetails=mongoose.model('productdetails', productdetailsschema)
module.exports = productdetails
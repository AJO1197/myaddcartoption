const mongoose=require('mongoose')
const timestamps = require('mongoose-timestamp')

const cartdetailsschema=new mongoose.Schema({
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

cartdetailsschema.plugin(timestamps)
const cartdetails=mongoose.model('cartdetails', cartdetailsschema)
module.exports = cartdetails
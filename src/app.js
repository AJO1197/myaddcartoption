const path = require('path')
const express = require('express')
const hbs = require('hbs')
const mongoose=require('mongoose')
require('./mongoose')
const productdetails=require('./productdetails')
const cartdetails=require('./cartdetails')

const app = express()


const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

const port=process.env.port || 3000
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)


app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index',{name:'Arunav Jyoti Ojah',title:'Home'})
    
})
app.get('/cart',(req,res)=>{
    const aggregate = productdetails.aggregate([
        { $project: {
            _id: 0,
            price: '$price'
        } }
      ]);
      
      cartdetails.aggregate([{
        $group: {
            _id: '',
            price: { $sum: '$price' }
        }
     }]).
        exec((err,resp)=>{
            if(resp[0]==undefined){
                res.render('cart',{
                    title: 'Cart',
                    name: 'Arunav Jyoti Ojah',
                    sum:0
                })
            }
            else{
                res.render('cart',{
                    title: 'Cart',
                    name: 'Arunav Jyoti Ojah',
                    sum:resp[0].price
                })
            }
            
        })
    
})


app.get('/add_to_cart', (req, res) => {
    const _id=req.query.id

    productdetails.find({_id: mongoose.Types.ObjectId(_id)}, (err, docs)=>{

    }).then((docs)=>{
        const newitem=new cartdetails({
            title: docs[0].title,
            description: docs[0].description,
            price: docs[0].price,
            filename: docs[0].filename
        })
        newitem.save()
        
    })
    
})

app.get('/products_in_cart', (req, res) => {
    cartdetails.find({},(err,docs)=>{

    }).then((docs)=>{
        res.send({
            data:docs
        })
    })

    
    
})
app.get('/allproducts', (req, res) => {
    
    productdetails.find({}, (err, docs)=>{

    }).then((docs)=>{
        res.send({
            data: docs
        })
        
    })
    
    
})

app.get('/remove_from_cart',(req,res)=>{
    cartdetails.findByIdAndRemove({_id: mongoose.Types.ObjectId(req.query.id)}).then(()=>{
        
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Arunav Jyoti Ojah',
        errorMessage: 'Page not found.'
    })
})

app.listen(port, () => {
    console.log('Server is up on port 3000.')
})

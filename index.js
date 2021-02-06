require('dotenv').config()

const express = require('express')
const app = express()
const ejsLayouts = require('express-ejs-layouts')
const multer = require('multer')
const cloudinary = require('cloudinary')
const { render } = require('ejs')
const uploads = multer({ dest: './uploads'})

app.set('view engine', 'ejs')
app.use(ejsLayouts)
app.use(express.urlencoded({extended: false}))

app.get('/', (req,res)=>{
    res.send('express cloudinary')
})

app.get('/images', (req,res)=>{
    res.render('index')
})

app.get('/images/new', (req,res)=>{
    res.render('new')
})

app.post('/images', uploads.single('inputFile'), (req,res)=>{
    const image = req.file.path
    console.log(image)
    cloudinary.uploader.upload(image, (result) =>{
        console.log(result)
        res.render('index', { image: result.url })
    })
})

const PORT = process.env.PORT || 8888
app.listen(PORT, console.log(`listening @ ${PORT}🎧`))
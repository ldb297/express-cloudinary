require('dotenv').config()

const express = require('express')
const app = express()
const ejsLayouts = require('express-ejs-layouts')
const multer = require('multer')
const cloudinary = require('cloudinary')

app.set('view engine', 'ejs')
app.use(ejsLayouts)
app.use(express.urlencoded({extended: false}))

app.get('/', (req,res)=>{
    res.send('express cloudinary')
})

const PORT = process.env.PORT || 8888
app.listen(PORT, console.log(`listening @ ${PORT}🎧`))
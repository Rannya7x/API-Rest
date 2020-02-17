const express = require('express')
const mongoose = require('mongoose')

const app = express()

// Database
mongoose.connect('mongodb+srv://rayana:rayana@apirest-3koyp.mongodb.net/apirest?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(()=> console.log('Conectado no banco...'))
    .catch(err => console.error(err))

// Middleware
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Controllers
const ToolControl = require('./controllers/toolControl')

// Routes
app.post('/tool', ToolControl.store)
app.post('/update', ToolControl.update)
app.get('/tool', ToolControl.index)

// Server
app.listen(3000, ()=> console.log('Ouvindo na porta 3000'))
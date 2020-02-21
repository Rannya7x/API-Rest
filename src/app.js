require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const app = express()

// Database
mongoose.connect(process.env.DB_CONNECTION,{
    useNewUrlParser: true,
    useUnifiedTopology: true}, 
    ()=> console.log("Conectado ao banco"))
    //.then(()=> console.log('Conectado no banco...'))
    //.catch(err => console.error(err))

// Controllers
const ToolControl = require('./controllers/toolControl')

// Routes
//const Routes = require('./routes')
app.post('/tools', ToolControl.store)
//app.post('/update', ToolControl.update)
app.get('/tools', ToolControl.index)
app.get('/tool:?tag', ToolControl.show)
app.delete('/tools/:toolId', ToolControl.delete)


// Middleware
//app.use(express.urlencoded({ extended: true }))
//app.use(express.json())

//app.use('/tool', Routes)







// Server
app.listen(3000, ()=> console.log('Ouvindo na porta 3000'))
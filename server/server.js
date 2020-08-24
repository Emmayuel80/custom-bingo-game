const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const PORT = env.PORT || 3000
const routes = require('./routes/router')
//CONFIG
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json)

//ROUTES
app.use('/', routes)

//SERVER
app.listen(PORT,function(){
    console.log('listening on port: ' + PORT)
})
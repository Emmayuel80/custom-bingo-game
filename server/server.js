const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const PORT = 8000
const routes = require('./routes/routes')
const logger = require('morgan')
const cors = require('cors')
//CONFIG
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));
//ROUTES
app.use('/api', routes)

//SERVER
app.listen(PORT,function(){
    console.log('listening on port: ' + PORT)
})
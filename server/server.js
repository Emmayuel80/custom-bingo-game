const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const PORT = process.env.PORT || 8000
const routes = require('./routes/routes')
const logger = require('morgan')
const cors = require('cors')
const path = require('path')
//CONFIG
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));
//ROUTES
app.use('/api', routes)

//MIDDLEWARE
app.use(express.static(path.join(__dirname, "../client", "build")))
//SERVER
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client", "build", "index.html"));
});

app.listen(PORT,function(){
    console.log('listening on port: ' + PORT)
})
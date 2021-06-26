// server configs
const express = require('express')
const config = require('./config/index')
const morgan = require('morgan')
var cors = require('cors')
const mongooseLoader = require('./db')

var passport = require('passport')
var session = require("express-session")
// const db = require('./db')
// const {User, Favorite} = require('./models')
const routes = require('./routes')
const app = express() 
const port = config.port || 3001

// log of requests
app.use(morgan('tiny'));
app.use(cors())
// parsers
app.use(express.json())
app.use(express.urlencoded({extended:true}))

// // coockie session
app.use(session({ secret: "cats" }));
app.use(passport.initialize());
app.use(passport.session());
require('./middlewares/passportConfig')(passport);


// routes
app.use('/api', routes)


mongooseLoader()
    .then(() => {
        console.log("Db loaded and connected");
        app.listen(port, () => {
            console.log(`Example app listening at http://localhost:${port}`)
        })
    })
    

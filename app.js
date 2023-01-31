const express = require('express')
const app = express()
const path = require('path')
const morgan = require('morgan') //Morgan will tell us all the activities performed on our site, the GETs, PUTs, POSTs, etc.
const { allowedNodeEnvironmentFlags } = require('process')
const exp = require('constants')

// Defining important and reusable paths of the program
const publicPath = path.join(__dirname, '/public')

// Defining the port
app.set('port', process.env.PORT || 3000) //We define that the port is either going to be provided by the host through process.env.PORT or 3000 by default

// Usages of the different dependencies
app.use(express.static(publicPath))
app.use(morgan('dev'))
app.use(express.urlencoded({extended: false}))
app.use(express.json())

// Core of the program
app.listen(app.get('port'), console.log(`Server initialized on port: http://localhost:${app.get('port')}`))

app.get('/', (req, res) => res.sendFile(path.join(__dirname, './views/home.html')))
app.post('/', (req, res) => res.sendFile(path.join(__dirname, './views/home.html')))
app.get('/register', (req, res) => res.sendFile(path.join(__dirname, './views/register.html')))
app.get('/login', (req, res) => res.sendFile(path.join(__dirname, './views/login.html')))


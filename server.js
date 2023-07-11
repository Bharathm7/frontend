var express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
var app = express()
const mongoose = require('mongoose')

var port = process.env.PORT || 3000

app.use(bodyParser.json())
app.use(cors())
app.use(
  bodyParser.urlencoded({
    extended: false
  })
)
app.use('/public', express.static('public'));

const mongoURI = 'mongodb://127.0.0.1:27017/'   //Database 

mongoose
  .connect(
    mongoURI,
    { useNewUrlParser: true ,useUnifiedTopology: true}
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err))


  app.use(bodyParser.urlencoded({ extended: false })) 
  app.use(bodyParser.json()) 
var Users = require('./routes/Users')
var Tickets = require('./routes/Tickets')

app.use('/users', Users)
app.use('/tickets', Tickets)

app.listen(port, function() {
  console.log('Server is running on port: ' + port)
})

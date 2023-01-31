const{json } = require('express')
const express = require('express')
const mongoose = require('mongoose')
const cros = require('cors')

// express.json();
const app = express()
app.use(json())
app.use(cros())
//dot env
require('dotenv').config()
// console.log(process.env.MongodbUrl) 
const port = 4000

//CONNECT TO MONGODB
mongoose.set('strictQuery', false);
mongoose.connect(process.env.MongodbUrl)
.then(()=>console.log('database is connected'))
.catch((e)=>console.log('Error!! database is not connected','messege:', e))

//import model
const Model1= require('./src/models/Class')

//import Route
const route1 = require('./src/routes/ClassRoute')

//set route path
app.use('/route1',route1)


app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('*',(req,res)=>{
    res.status(404).json({
        status:"404 not found"
    })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
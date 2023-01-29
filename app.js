const{json } = require('express')
const express = require('express')
const mongoose = require('mongoose')
// express.json();
const app = express()
app.use(json())
//dot env
require('dotenv').config()
// console.log(process.env.MongodbUrl) 
const port = 4000
mongoose.set('strictQuery', false);
mongoose.connect(process.env.MongodbUrl)
.then(()=>console.log('database is connected'))
.catch((e)=>console.log('Error!! database is not connected','messege:', e))


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/post',(req,res)=>{
    console.log(req.body)
})
app.post('*',(req,res)=>{
    res.status(404).json({
        status:"404 not found"
    })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
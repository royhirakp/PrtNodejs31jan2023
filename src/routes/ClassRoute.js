const express = require('express');
const{json } = require('express')
const router = express.Router();
router.use(json())

const Model1 = require('../models/Class')
router.get('/get', async (req, res) => { 
    try{
        const userData = await Model1.find();
        res.json({
            status: "Success",
            message: "User succesfully created",
            userData
        })
    }
    catch(e){
        res.json({
            status: "Failed",
            message: e.message
        })
    }

})


router.post('/post',async (req,res)=>{
    try {
      console.log(req.body)
      const status = await Model1.create({
              title:req.body.title
          })
          res.json({
            status:'susecss',
            data : status
          })
    } catch (error) {
        res.json({
          status:"error",
          errMessege: error
        })
    }
})
module.exports = router;
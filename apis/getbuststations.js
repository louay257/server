const express = require('express');
const busstations = require('../../models/busstations');
const router = express.Router();

router.get("/bs",async(req,res)=>{
  try{
      const dataitem = await busstations.find({});

      res.status(200).json({
      data:dataitem
      });
  }catch (error){
      console.log(error);
  }
})

module.exports = router;
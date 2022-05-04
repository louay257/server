const express = require("express");
const router = express.Router();
const stations = require("../models/stations");


router.get("/test/:lat&:long&:title&:related_bus",(req,res)=>{
    const lat = req.params.lat;
    const long = req.params.long;
    const title=req.params.title;
    const related_bus=req.params.related_bus;

    const station = new stations({
      title:title,
  related_bus:related_bus,
  lat: lat,
  long: long
    })
    station.save().then((item)=>{
      res.send('success');
    }).catch(err => console.log(err))
    
})


module.exports = router;
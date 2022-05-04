const express = require('express');
const busstations = require('../../models/busstations');
const router = express.Router();

router.post("/addbs",async(req,res)=>{
    const {title,route, company,related_bus,lat,long}=req.body;
    const station = new busstations({
        title:title,
        route:route,
        company:company,
        related_bus:related_bus,
        lat: lat,
        long: long
      })
      station.save().then((item)=>{
        res.send('success');
      }).catch(err => console.log(err))
    return res.status(200).json({
        data:station,
    });
    
    })
const express = require('express');
const stations = require('../../models/stations');
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json(
      {
        message : "API IS RUNNING"
      }
    )
  })

router.post("/add",async(req,res)=>{
const {title, related_bus,lat,long}=req.body;
const station = new stations({
    title:title,
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
router.get("/data",async(req,res)=>{
    try{
        const dataitem = await stations.find({});

        res.status(200).json({
        data:dataitem
        });
    }catch (error){
        console.log(error);
    }
})

module.exports = router;
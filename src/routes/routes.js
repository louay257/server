const express = require('express');
const busstations = require('../../models/busstations');
const metrostations = require('../../models/metrostation')
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json(
      {
        message : "API IS RUNNING"
      }
    )
  })

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


router.post("/addms",async(req,res)=>{
  const {title,route, company,related_bus,lat,long}=req.body;
  const station = new metrostations({
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
  router.get("/ms",async(req,res)=>{
      try{
          const dataitem = await metrostations.find({});
  
          res.status(200).json({
          data:dataitem
          });
      }catch (error){
          console.log(error);
      }
  })
  


module.exports = router;
const mongoose = require("mongoose");


const stationSchema = mongoose.Schema({
  title:String,
  related_bus:Array,
  lat: Number,
  long: Number,
});

module.exports = mongoose.model("station", stationSchema);
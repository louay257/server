const mongoose = require("mongoose");
const { stringify } = require("nodemon/lib/utils");


const metrostationSchema = mongoose.Schema({
  title:String,
  route:String,
  company:String,
  related_bus:Array,
  lat: Number,
  long: Number,
});

module.exports = mongoose.model("metrostation", metrostationSchema);
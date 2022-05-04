const mongoose = require("mongoose");
const { stringify } = require("nodemon/lib/utils");


const busstationSchema = mongoose.Schema({
  title:String,
  route:String,
  company:String,
  related_bus:Array,
  lat: Number,
  long: Number,
});

module.exports = mongoose.model("busstation", busstationSchema);
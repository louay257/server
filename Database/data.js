const mongoose = require("mongoose");
require('dotenv').config()


const connectDB = async() => {
    try {
        const conn = await mongoose.connect(
    process.env.DATABASE,
    {
      useNewUrlParser: true,
      useUnifiedTopology:true
    }
  )
  console.log(`MongoDB Connected: ${conn.connection.host}`)
  
  } catch (err) {
    console.log(err)
}
}
module.exports = connectDB
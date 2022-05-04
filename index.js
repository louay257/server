//DB CONNECTION
const connectDB = require("./Database/data");
connectDB();
//////////////
const express = require('express');
const router = require("./src/routes/routes");
const app = express()
const port = process.env.PORT ||3000

app.use(express.json());
app.use("/",router) 


app.listen(port, () => {
  console.log(`App listening at port:${port}`)
})


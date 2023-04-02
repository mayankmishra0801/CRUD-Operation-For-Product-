const express = require("express");

const app = express();
const  dotenv = require("dotenv");

const mongoose = require("mongoose");
const cors = require("cors");


dotenv.config();

//connect to db
const connectDB = require('./config/empDB')

const MONGO_URI = process.env.MONGO_URI
connectDB(MONGO_URI)


// import routes
const productRoutes = require("./routes/product");

//middleware
app.use(express.json());
app.use(cors())

//routes middleware

app.use("/api/products",productRoutes)




app.listen(4000, ()=> console.log("server running on port 4000!"));


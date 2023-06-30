const express = require("express");
const connectToDB = require("./config/db");

//Routes
const userRouter = require('./routes/user')

const app = express();

//DB connection
require("dotenv").config();
const PORT = process.env.PORT || 8080;
connectToDB();

app.use(express.urlencoded({ extended: false }));
app.use(express.json())


//Registering Routes 
app.use("/api/user",userRouter)


app.listen(PORT, () => {
  console.log(`Server started at ${PORT}`.bgCyan.white);
});

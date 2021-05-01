const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");

const PORT = process.env.PORT || 8080;


//settings
app.use(express.static(__dirname + "/public"));
app.set("view engine", "hbs");
app.use(express.urlencoded({ extended: false }));

//database
const DB_NAME = process.env.DB_NAME;
const DB_LINK = process.env.MONGO_LINK + DB_NAME;

mongoose.connect(DB_LINK, {useUnifiedTopology:true, useNewUrlParser:true})
.then(()=>{console.log('Mongoose found his way to the database...')})
.catch(err =>{console.log(err)})


//! Adding models
const User = require("./models/User");
const Product = require("./models/Product");

//! Routes
const indexRouter = require("./routes/indexRouter");
const signUpRouter = require("./routes/signUpRouter");
const loginRouter = require("./routes/loginRouter");
//? Home
app.use("/", indexRouter);
//? Register
app.use("/register", signUpRouter);
//? Login
app.use("/login", loginRouter);


//! Listen
app.listen(PORT, () => {
  console.log("Server is running at http://localhost:" + PORT);
});


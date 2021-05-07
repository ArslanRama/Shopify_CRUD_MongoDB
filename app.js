const express = require("express");
const app = express();

//! Favicon
const favicon = require('serve-favicon')
const path = require('path')


require("dotenv").config();
const mongoose = require("mongoose");

const PORT = process.env.PORT || 8000;


//! settings
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')))
app.use(express.static(__dirname + "/public"));
app.set("view engine", "hbs");
app.use(express.urlencoded({ extended: false }));

//! database name and url
const DB_NAME = process.env.DB_NAME
const DB_URL = process.env.MongoDB_Link+DB_NAME
mongoose.connect(DB_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})
.then(()=> console.log('MongoDB database is successfully connected'))
.catch(()=> console.log('Database connection failed!'))


//! Routes
const indexRouter = require("./routes/indexRouter");
const signupRouter = require("./routes/signupRouter");
const loginRouter = require("./routes/loginRouter");

//! Home
app.use("/", indexRouter);
//! Register
app.use("/register", signupRouter);
//! Login
app.use("/login", loginRouter);


//! Listen
app.listen(PORT, () => {
  console.log("Server is running at http://localhost:" + PORT);
});


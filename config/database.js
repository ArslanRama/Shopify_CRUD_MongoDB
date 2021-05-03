//require mongoose module
const mongoose = require('mongoose');

//require chalk module to give colors to console text
const chalk = require('chalk');

const connected = chalk.bold.cyan;
const error = chalk.bold.yellow;
const disconnected = chalk.bold.red;
const termination = chalk.bold.magenta;


// database name
const DB_NAME = process.env.DB_NAME
const DB_URL = process.env.MongoDB_Link+DB_NAME
mongoose.connect(DB_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})

//export this function and imported by server.js
module.exports =function(){

    mongoose.connect(DB_URL);

    mongoose.connection.on('connected', function(){
        console.log(connected("Mongoose default connection is open to ", DB_URL));
    });

    mongoose.connection.on('error', function(err){
        console.log(error("Mongoose default connection has occured "+err+" error"));
    });

    mongoose.connection.on('disconnected', function(){
        console.log(disconnected("Mongoose default connection is disconnected"));
    });

    process.on('SIGINT', function(){
        mongoose.connection.close(function(){
            console.log(termination("Mongoose default connection is disconnected due to application termination"));
            process.exit(0)
        });
    });

}

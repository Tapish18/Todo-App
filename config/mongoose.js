const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1/MyTasks");

var db = mongoose.connection;

db.on("error",console.error.bind(console,"error connecting to database"))

db.once("open",function(){
    console.log("Connected Successfully to Database");
});


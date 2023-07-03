const express = require("express");
const port  = 8000;

const app = express();

// set up views and view engine for the app;

app.set("view engine","ejs");
app.set("views","./views");




// add express.router to the app. This route is relative to this position

app.use("/app",require("./routes/index"));

app.listen(port, function(err){
    if(err){
        console.log(`Error Occurred : ${err}`);
        return;
    }

    console.log(`Server Started Successfully at port : ${port}`);
    return;
})
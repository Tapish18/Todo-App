const express = require("express");
const port  = 8000;

const app = express();




// add express.router to the app. This route is relative to this position

app.use("/",require("./routes/index"));

app.listen(port, function(err){
    if(err){
        console.log(`Error Occurred : ${err}`);
        return;
    }

    console.log(`Server Started Successfully at port : ${port}`);
    return;
})
const mongoose = require("mongoose")

const taskSchema = new mongoose.Schema({
    task_description :{
        type : String,
        required : true
    },
    category : {
        type : String,
        required : true
    },
    due_date : {
        type : Date,
        required : true
    }
});

const Tasks = mongoose.model("Tasks",taskSchema);

module.exports = Tasks;
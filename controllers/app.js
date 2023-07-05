const Tasks = require("../models/task");

module.exports.app = function(req,res){
    Tasks.find().then((fetchedTasks) => {
        let colorArr = [];
        function getColor (variable){
            switch (variable.toLowerCase()){
                case "personal":
                    colorArr.push("red");
                    break;
                case "work":
                    colorArr.push("green");
                    break;
                case "cleaning":
                    colorArr.push("blue");
                    break;
                case "school":
                    colorArr.push("orange");
                    break;

                default :
                    colorArr.push("violet")
        
            }
        }

        fetchedTasks.forEach(task => {
            getColor(task.category);
        });

        console.log(colorArr);
        return res.render("./app",{
            title : "Todo App",
            tasks : fetchedTasks,
            colorArray : colorArr
        });
    });
}


module.exports.mytasks = function(req,res){
    return res.render("./tasks",{
        title : "Todo App - My Tasks"
    });
}


module.exports.createTask = function(req,res){
    console.log("Called");
    console.log(req.body);

    Tasks.create({
        task_description : req.body.task_description,
        category : req.body.category,
        due_date : req.body.due_date
    }).then((newTask) => {
        console.log("Task added  Successfully!")
        console.log("*******",newTask);
        return res.redirect("back");
    }).catch((err) => {
        console.log(`Error Occurred in adding new Task : ${err}`);
        return;
    });
}

module.exports.deleteTasks = function(req,res){
    console.log("Delete Called");
    // console.log(req.body.task_selector.length);
    if(req.body.task_selector == undefined || req.body.task_selector.length == 0){
        return res.redirect("back");;
    }
    Tasks.deleteMany({_id : {$in: req.body.task_selector}}).then(() => {
        return res.redirect("back");
    }).catch((err) => {
        console.log(`Eror occurred : ${err}`);
    })
}
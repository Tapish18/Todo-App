module.exports.app = function(req,res){
    return res.render("./app",{
        title : "Todo App"
    })
}


module.exports.mytasks = function(req,res){
    return res.render("./tasks",{
        title : "Todo App - My Tasks"
    });
}
const express = require("express");
const appController = require("../controllers/app")
const router = express.Router();

router.get("/",appController.app);
router.get("/mytasks",appController.mytasks);
router.post("/create-task",appController.createTask);
router.post("/delete-tasks",appController.deleteTasks);


module.exports = router;
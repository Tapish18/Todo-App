const express = require("express");
const appController = require("../controllers/app")
const router = express.Router();

router.get("/app",appController.app);


module.exports = router;
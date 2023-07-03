const express = require("express");
const appController = require("../controllers/app")
const router = express.Router();

router.get("/",appController.app);
router.get("/mytasks",appController.mytasks)


module.exports = router;
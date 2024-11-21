var express = require("express");
const car = require("../controller/carcontroller");
var router = express.Router();
router.post("/create", car.create);
router.get("/allrecord", car.getAllcars);
router.put("/update/:carId", car.updatecars);
module.exports = router;

var express = require("express");
const contactUs = require("../controller/contactUsController");
var router = express.Router();
router.post("/create", contactUs.create);
// router.get("/allrecord", car.getAllcars);
// router.put("/update/:carId", car.updatecars);
module.exports = router;

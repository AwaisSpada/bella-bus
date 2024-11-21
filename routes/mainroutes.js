var express = require("express");
const quoterouter = require("./quoteroutes");
const carrouter = require("./carroutes");
const paymentrouter = require("./paymentsroutes");
const userrouter = require("./userroutes");
const constUsRouter = require("./contactUsRoute");

var router = express.Router();
router.use("/quote", quoterouter);
router.use("/car", carrouter);
router.use("/payment", paymentrouter);
router.use("/user", userrouter);
router.use("/contactUs", constUsRouter);

module.exports = router;

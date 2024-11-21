var express = require("express");
const user = require("../controller/usercontroller");
const { checkToken } = require("../utilities/tokenauth");

var router = express.Router();

router.post("/login", user.UserLogin);
router.post("/signup", user.UserSignUp);
router.get("/allUsers", user.GetAllUsers);
router.get("/auth", checkToken, user.UserAuth);
router.get("/getOne/:customerId", user.GetUserById);
router.put("/updateUser/:customerId", user.UpdateUser);
router.put("/updatePassword", checkToken, user.UpdateUserPassword);
router.get("/allDrivers", user.GetAllDrivers);
module.exports = router;

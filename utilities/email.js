const approval = require("./approved");
const emailSender = require("./emailSender");
const quotecontroller = require("../controller/quotecontroller");
const quoteservice = require("../services/quoteservice");
let data;
let quoteId;
data = quoteservice.getquotebyId({ _id: quoteId });

var to = "";
var from = process.env.EMAIL_ADDRESS;

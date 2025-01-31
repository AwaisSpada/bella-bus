var express = require("express");
const quote = require("../controller/quotecontroller");
var router = express.Router();
router.post("/create", quote.create);
router.get("/allrecord", quote.getAllquote);
router.get("/Onerecord/:quoteId", quote.getquotebyId);
router.put("/update/:quoteId", quote.updatequote);
router.delete("/delete/:quoteId", quote.quoteDelete);
router.get("/allPending", quote.getAllPendingQuote);
router.post("/cancelQuote/:quoteId", quote.cancelQuote);
router.post("/approvedQuote/:quoteId", quote.approveQuote);
module.exports = router;

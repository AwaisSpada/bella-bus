var express = require("express");
const payments = require("../controller/paymentscontroller");
var router = express.Router();
router.get("/unpaidPayments", payments.unPaidPayments);
router.post("/Stripe", payments.StripePayment);
router.post("/UpdateAndConfirmPayment", payments.StripeUpdateAndConfirm);
router.post("/CancelPayment", payments.PaymentRefund);
router.post("/cancelPaymentIntent/:pId", payments.cancelPaymentIntent);
module.exports = router;

const paymentsService = require("../services/paymentservice");
const messageUtil = require("../utilities/message");
const stripe = require("stripe")(
  "sk_test_51K4veVHqRFkTNMxNfcXg65mSHbCeisLjxwwPR7M3TZkzeOmY2ZThEYXGOg6cFFYsf7CZEcZjyENzdsqfELZ4qnlw00URVLDMcS"
);

const {
  successResponse,
  notFoundResponse,
  serverErrorResponse,
  badRequestErrorResponse,
} = require("../utilities/response");
class payments {
  StripePayment = async (req, res) => {
    let error = [];
    const { product, token } = req.body;

    if (!product) {
      error.push("Product");
    }
    if (!token) {
      error.push("Token");
    }
    if (error.length > 0) {
      error.join(", ");
      return badRequestErrorResponse(res, messageUtil.empytyField + error);
    }

    try {
      const customer = await stripe.customers.create({
        email: token.email,
        source: token.id,
      });

      const paymentIntent = await stripe.paymentIntents.create({
        amount: product.amount * 100,
        currency: "usd",
        customer: customer.id,
        receipt_email: token.email,
        description: `Purchased the ${product.name}`,
        payment_method_types: ["card"],
        // capture_method: "manual",
        payment_method: token.card.id,
        confirm: true,
      });

      if (!paymentIntent) {
        return badRequestErrorResponse(res, messageUtil.chargeMethod);
      }
      let create = await paymentsService.createPayment({
        // quote_id: quoteId,
        user_email: token.email,
        amount: product.amount,
        paymentIntent: paymentIntent.id,
      });
      // console.log("creation", create);
      if (!create) {
        return badRequestErrorResponse(res, messageUtil.paymentRecord);
      }
      return successResponse(res, messageUtil.PaymentIntentCreated, create);
    } catch (error) {
      console.log("error in in StripeAPI", error);
      return serverErrorResponse(res, error);
    }
  };

  StripeUpdateAndConfirm = async (req, res) => {
    let error = [];
    const { amount, paymentId } = req.body;

    if (!amount) {
      error.push("Updated Amount");
    }
    if (!paymentId) {
      error.push("Updated Amount");
    }
    if (error.length > 0) {
      error.join(", ");
      return badRequestErrorResponse(res, messageUtil.empytyField + error);
    }
    if (amount === 0 || amount < 0) {
      return badRequestErrorResponse(res, messageUtil.wrongAmount);
    }

    try {
      const paymentIntent = await stripe.paymentIntents.update(paymentId, {
        amount: amount * 100,
      });
      if (!paymentIntent) {
        return badRequestErrorResponse(res, messageUtil.paymentUpdate);
      }

      const paymentIntentCapture = await stripe.paymentIntents.confirm(
        paymentId
      );
      if (!paymentIntentCapture) {
        return badRequestErrorResponse(res, messageUtil.paymentCapture);
      }

      const paymentIntentConfirm = await stripe.paymentIntents.capture(
        paymentId
      );
      if (!paymentIntentConfirm) {
        return badRequestErrorResponse(res, messageUtil.paymentConfirm);
      }

      let data = await paymentsService.updatepayments(
        {
          paymentIntent: paymentId,
        },
        { paymentStatus: "captured" }
      );

      if (!data)
        return badRequestErrorResponse(res, messageUtil.paymentStatusUpdated);
      let finalResult = {
        paymentIntentConfirm: paymentIntentConfirm,
        data: data,
      };
      return successResponse(res, messageUtil.success, finalResult);
    } catch (error) {
      return serverErrorResponse(res, error);
    }
  };

  PaymentRefund = async (req, res) => {
    let error = [];
    const { paymentId } = req.body;

    if (!paymentId) {
      error.push("Updated Amount");
    }
    if (error.length > 0) {
      error.join(", ");
      return badRequestErrorResponse(res, messageUtil.empytyField + error);
    }

    try {
      const paymentIntent = await stripe.refunds.create({
        charge: paymentId,
      });
      if (!paymentIntent) {
        return badRequestErrorResponse(res, messageUtil.RefundNotGenrated);
      }
      return successResponse(res, messageUtil.RefundCreated, paymentIntent);
    } catch (error) {
      return serverErrorResponse(res, error);
    }
  };

  unPaidPayments = async (req, res) => {
    try {
      let getUnPaidPayments = await paymentsService.getpayments({
        paymentStatus: "incomplete",
      });

      if (!getUnPaidPayments.lenth === 0) {
        return badRequestErrorResponse(res, messageUtil.RefundNotGenrated);
      }
      return successResponse(
        res,
        messageUtil.unPaidPayments,
        getUnPaidPayments
      );
    } catch (error) {
      return serverErrorResponse(res, error);
    }
  };
  cancelPaymentIntent = async (req, res) => {
    const { pId } = req.params;
    if (!pId) {
      badRequestErrorResponse(res, messageUtil.NotFound);
    }
    try {
      let getUnPaidPayments = await paymentsService.getpaymentbyId({
        paymentIntent: pId,
      });

      if (!getUnPaidPayments) {
        return badRequestErrorResponse(res, messageUtil.RefundNotGenrated);
      }
      const paymentIntent = await stripe.paymentIntents.cancel(
        getUnPaidPayments.paymentIntent
      );

      let updateStatus = await paymentsService.updatepayments(
        {
          paymentIntent: getUnPaidPayments.paymentIntent,
        },
        {
          paymentStatus: "Cancelled",
        }
      );
      if (!paymentIntent && !updateStatus) {
        return badRequestErrorResponse(res, messageUtil.RefundNotGenrated);
      }

      return successResponse(res, messageUtil.cancelPaymentIntent);
    } catch (error) {
      return serverErrorResponse(res, error);
    }
  };
}
module.exports = new payments();

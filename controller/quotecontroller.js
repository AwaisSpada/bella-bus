const quoteservice = require("../services/quoteservice");
const messageUtil = require("../utilities/message");
const { approval } = require("../utilities/approved");
const { cancelQuote } = require("../utilities/cancelQuote");
const { quoteApprove } = require("../utilities/quoteApprove");
const { emailSender } = require("../utilities/emailSender");
const { msgSender } = require("../utilities/msgSender");
const { ownerSms } = require("../utilities/msgs");
const { userSms } = require("../utilities/userMsg");
const { cancelSms } = require("../utilities/cancelSms");
const { approveSms } = require("../utilities/approveSms");
const { forAdmin } = require("../utilities/mailForAdmin");

const {
  successResponse,
  notFoundResponse,
  serverErrorResponse,
} = require("../utilities/response");
class quote {
  create = async (req, res) => {
    // console.log("req.body in create API: ", req.body);

    let quote;
    try {
      quote = await quoteservice.create({
        ...req.body,
      });
      quote.save();
      // console.log("quote", quote);
      const quote1 = await quoteservice.getquotebyId({ _id: quote._id });
      // console.log("quote1", quote1);
      /*********  mail sending code   */
      let values = approval(quote1);
      let sendTo = [
        "zaka@mailinator.com",
        "waleedsaifi@spadasoft.com",
        req.body.email,
      ];
      for (let item of sendTo) {
        await emailSender(
          item,
          process.env.EMAIL_FROM,
          values.subject,
          values.html
        );
      }

      /************** */

      let value = forAdmin(quote1); // sending mail to owner
      let emailSendTo = [
        "zaka@mailinator.com",
        "waleedsaifi@spadasoft.com",
        process.env.BELLA_OWNER,
      ];
      for (let item of emailSendTo) {
        await emailSender(
          item,
          process.env.EMAIL_FROM,
          value.subject,
          value.html
        );
      }

      // let msgs = ownerSms(quote1);
      // await msgSender(msgs.body, "+13083376226", "+14752570404"); //sending SMS to Owner

      // let userMsg = userSms(quote1);
      // await msgSender(userMsg.body, "+13083376226", req.body.user_phoneNumber); //sending SMS to User req.body.user_phoneNumber

      successResponse(res, messageUtil.QuoteAdded, quote);
    } catch (err) {
      console.log("error", err);
      serverErrorResponse(res, err);
    }
  };

  getAllquote = async (req, res) => {
    let quote;
    try {
      quote = await quoteservice.getAllquote();
      if (quote.length === 0) {
        notFoundResponse(res, messageUtil.NotFound);
      } else {
        successResponse(res, messageUtil.ok, quote);
      }
    } catch (err) {
      serverErrorResponse(res, err);
    }
  };

  getquotebyId = async (req, res) => {
    const { quoteId } = req.params;
    let quote;
    try {
      quote = await quoteservice.getquotebyId({ _id: quoteId });
      if (!quote) {
        notFoundResponse(res, messageUtil.NotFound);
      } else {
        successResponse(res, messageUtil.ok, quote);
      }
    } catch (err) {
      serverErrorResponse(res, err);
    }
  };
  updatequote = async (req, res) => {
    const { quoteId } = req.params;
    let quote;
    try {
      quote = await quoteservice.updatequote({ _id: quoteId }, { ...req.body });
      if (!quote) {
        notFoundResponse(res, messageUtil.NotFound);
      } else {
        successResponse(res, messageUtil.updateSuccess, quote);
      }
    } catch (err) {
      serverErrorResponse(res, err);
    }
  };
  quoteDelete = async (req, res) => {
    const { quoteId } = req.params;
    let quote;
    try {
      quote = await quoteservice.quoteDelete({ _id: quoteId });
      if (!quote) {
        notFoundResponse(res, messageUtil.NotFound);
      } else {
        successResponse(res, messageUtil.deleteSuccess, quote);
      }
    } catch (err) {
      serverErrorResponse(res, err);
    }
  };

  getAllPendingQuote = async (req, res) => {
    try {
      let allPendingQuote = await quoteservice.getAllquote({
        status: "pending",
      });
      console.log("hello");
      if (!allPendingQuote.lenth === 0) {
        return badRequestErrorResponse(res, messageUtil.pendingQuotes);
      }
      return successResponse(
        res,
        messageUtil.pendingQuotesDetails,
        allPendingQuote
      );
    } catch (error) {
      return serverErrorResponse(res, error);
    }
  };

  cancelQuote = async (req, res) => {
    const { quoteId } = req.params;
    if (!quoteId) {
      badRequestErrorResponse(res, messageUtil.NotFound);
    }
    try {
      let getCancelQuote = await quoteservice.getquotebyId({
        _id: quoteId,
      });

      if (!getCancelQuote) {
        return badRequestErrorResponse(res, messageUtil.NotFound);
      }
      let updateStatus = await quoteservice.updatequote(
        {
          _id: getCancelQuote._id,
        },
        {
          status: "cancelled",
        }
      );
      if (!updateStatus) {
        return badRequestErrorResponse(res, messageUtil.NotFound);
      }

      /*********  mail sending code   */
      let values = cancelQuote(getCancelQuote); // cancel mail,sending to user
      let emailSendTo = [
        "zaka@mailinator.com",
        "waleedsaifi@spadasoft.com",
        getCancelQuote.payments.user_email,
      ];
      for (let item of emailSendTo) {
        await emailSender(
          item,
          process.env.EMAIL_FROM,
          values.subject,
          values.html
        );
      }

      /************** */
      // await msgSender(
      //   cancelSms.body,
      //   "+13083376226",
      //   getCancelQuote.user_phoneNumber
      // );

      return successResponse(res, messageUtil.statusCancelled);
    } catch (error) {
      return serverErrorResponse(res, error);
    }
  };

  approveQuote = async (req, res) => {
    const { quoteId } = req.params;
    if (!quoteId) {
      badRequestErrorResponse(res, messageUtil.NotFound);
    }
    try {
      let getApproveQuote = await quoteservice.getquotebyId({
        _id: quoteId,
      });

      if (!getApproveQuote) {
        return badRequestErrorResponse(res, messageUtil.NotFound);
      }
      let updateStatus = await quoteservice.updatequote(
        {
          _id: getApproveQuote._id,
        },
        {
          status: "approved",
        }
      );
      if (!updateStatus) {
        return badRequestErrorResponse(res, messageUtil.NotFound);
      }

      /*********  mail sending code   */
      let values = quoteApprove(getApproveQuote);
      let emailSendTo = [
        "zaka@mailinator.com",
        "waleedsaifi@spadasoft.com",
        getApproveQuote.payments.user_email,
      ];
      for (let item of emailSendTo) {
        await emailSender(
          item,
          process.env.EMAIL_FROM,
          values.subject,
          values.html
        );
      }

      /************** */
      // await msgSender(
      //   approveSms.body,
      //   "+13083376226",
      //   getApproveQuote.user_phoneNumber
      // );

      return successResponse(res, messageUtil.statusApproved);
    } catch (error) {
      return serverErrorResponse(res, error);
    }
  };
}
module.exports = new quote();

// const carservice = require("../services/carservice");
const contactUsService = require("../services/contactUsService");
const messageUtil = require("../utilities/message");
const { contactUs } = require("../utilities/contactUs");
const { emailSender } = require("../utilities/emailSender");
const {
  notFoundResponse,
  successResponse,
  serverErrorResponse,
} = require("../utilities/response");
class ContactUs {
  create = async (req, res) => {
    try {
      let result = await contactUsService.create({
        ...req.body,
      });
      let value = contactUs(result);

      let sendTo = [
        "zaka@mailinator.com",
        "waleedsaifi@spadasoft.com",
        process.env.BELLA_OWNER,
      ];
      for (let item of sendTo) {
        await emailSender(
          item,
          process.env.EMAIL_FROM,
          value.subject,
          value.html
        );
      }

      successResponse(res, messageUtil.ok, result);
    } catch (err) {
      serverErrorResponse(res, err);
    }
  };
}
module.exports = new ContactUs();

const client = require("twilio")(
  "AC8312dccc03186e788c9c4c333d21e045", // israil
  "4ede4f5c0bfbf01bf1673b8136824ffe"
);
const messageUtill = require("../utilities/message");
const {
  successResponse,
  notFoundResponse,
  serverErrorResponse,
} = require("../utilities/response");

function msgSender(body, from, to) {
  try {
    client.messages
      .create({
        body: body,
        from: from,
        to: to,
      })
      .then((message) => console.log(message.sid))
      .catch((error) => console.log(error));
    // return successResponse(res, messageUtill.ok);
  } catch (error) {
    // return serverErrorResponse(res, error);
  }
}
module.exports = {
  msgSender,
};

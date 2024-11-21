const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(
  process.env.SEND_GRID_KEY
);
function emailSender(to, from, subject, html) {
  const msg = {
    to: to,
    from: from ? from : process.env.EMAIL_FROM,
    subject: subject,
    html: html,
  };
  sgMail
    .send(msg)
    .then(() => {
      console.log(`Email sent to : ${to}`);
      return;
    })
    .catch((error) => {
      console.log(
        "🚀 ~ file: emailSender.js ~ line 48 ~ emailSender ~ error",
        error
      );
      return error;
    });
  return;
}
module.exports = {
  emailSender,
};

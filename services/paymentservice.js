const paymentsSchema = require("../model/paymentsSchema");

exports.createPayment = async (query) => {
  return await paymentsSchema.create(query);
};
exports.getpaymentbyId = async (query) => {
  return await paymentsSchema.findOne(query);
};

exports.getpayments = async (query) => {
  return await paymentsSchema
    .find(query)
    .select("amount  user_email paymentIntent");
};
exports.updatePayments = async (query, data) => {
  return await paymentsSchema.findByIdAndUpdate(query, data, {
    new: true,
  });
};
exports.updatepayments = async (query, data) => {
  return await paymentsSchema.findOneAndUpdate(query, data, {
    new: true,
  });
};

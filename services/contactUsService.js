const contactUsSchema = require("../model/contactUsSchema");
exports.create = async (query) => {
  return await contactUsSchema.create(query);
};
// exports.getAllcars = async (query) => {
//   return await contactUsSchema.find({ query }).select("-__v -createdAt -updatedAt");
// };
// exports.updatecars = async (query, data) => {
//   return await contactUsSchema.findByIdAndUpdate(query, data, {
//     new: true,
//   });
// };
// exports.deletecar = async (query) => {
//   return await contactUsSchema.findByIdAndRemove(query);
// // };

// "sk_test_51K4veVHqRFkTNMxNfcXg65mSHbCeisLjxwwPR7M3TZkzeOmY2ZThEYXGOg6cFFYsf7CZEcZjyENzdsqfELZ4qnlw00URVLDMcS"
// "sk_test_51K4veVHqRFkTNMxNfcXg65mSHbCeisLjxwwPR7M3TZkzeOmY2ZThEYXGOg6cFFYsf7CZEcZjyENzdsqfELZ4qnlw00URVLDMcS"

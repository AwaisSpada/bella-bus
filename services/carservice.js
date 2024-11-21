const carSchema = require("../model/carSchema");
exports.create = async (query) => {
  return await carSchema.create(query);
};
exports.getAllcars = async (query) => {
  return await carSchema.find({ query }).select("-__v -createdAt -updatedAt");
};
exports.updatecars = async (query, data) => {
  return await carSchema.findByIdAndUpdate(query, data, {
    new: true,
  });
};
exports.deletecar = async (query) => {
  return await carSchema.findByIdAndRemove(query);
};

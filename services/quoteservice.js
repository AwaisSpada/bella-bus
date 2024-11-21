const quoteSchema = require("../model/quoteSchema");
const userSchema = require("./userservice");
exports.create = async (query) => {
  return await quoteSchema.create(query);
};

exports.getAllquote = async (query) => {
  return await quoteSchema.find(query).sort({ _id: -1 }).populate("payments");
};
exports.getquotebyId = async (query) => {
  return await quoteSchema.findOne(query).populate("payments").populate("car");
};

exports.getUserById = async (query) => {
  return await userSchema.findOne(query);
};
exports.updatequote = async (query, data) => {
  return await quoteSchema.findByIdAndUpdate(query, data, {
    new: true,
  });
};

exports.quoteDelete = async (query) => {
  return await quoteSchema.findByIdAndRemove(query);
};

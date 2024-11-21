const UserSchema = require("../model/userSchema");

exports.createUser = async (query) => {
  return await UserSchema.create(query);
};

exports.getUser = async (query) => {
  return await UserSchema.findOne(query);
};

exports.getUserDetails = async (query) => {
  return await UserSchema.findOne(query).select(
    "-__v -createdAt -updatedAt -password"
  );
};

exports.updateUserById = async (query, data) => {
  return await UserSchema.findOneAndUpdate(query, data, {
    new: true,
  }).select("-__v -createdAt -updatedAt");
};

exports.getAllUsers = async (query) => {
  return await UserSchema.find({ query });
};
exports.getAllDrivers = async (query) => {
  return await UserSchema.find(query);
};

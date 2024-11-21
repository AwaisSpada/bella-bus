// const carservice = require("../services/carservice");
const carservice = require("../services/carservice");
const messageUtil = require("../utilities/message");
const {
  notFoundResponse,
  successResponse,
  serverErrorResponse,
} = require("../utilities/response");
class car {
  create = async (req, res) => {
    let car;
    try {
      car = await carservice.create({
        ...req.body,
      });
      successResponse(res, messageUtil.ok, car);
    } catch (err) {
      serverErrorResponse(res, err);
    }
  };

  getAllcars = async (req, res) => {
    let car;
    try {
      car = await carservice.getAllcars();
      if (car.length === 0) {
        notFoundResponse(res, messageUtil.NotFound);
      } else {
        successResponse(res, messageUtil.ok, car);
      }
    } catch (err) {
      serverErrorResponse(res, err);
    }
  };
  updatecars = async (req, res) => {
    const { carId } = req.params;
    let car;
    try {
      car = await carservice.updatecars({ _id: carId }, { ...req.body });
      if (!car) {
        notFoundResponse(res, messageUtil.NotFound);
      } else {
        successResponse(res, messageUtil.updateSuccess, car);
      }
    } catch (err) {
      serverErrorResponse(res, err);
    }
  };
}
module.exports = new car();

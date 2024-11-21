const UserServices = require("../services/userservice");
const { bcryptHash, comparePassword } = require("../utilities/password_utilit");
const messageUtil = require("../utilities/message");
const {
  successResponse,
  existAlreadyResponse,
  notFoundResponse,
  authorizationErrorResponse,
  serverErrorResponse,
} = require("../utilities/response");
const jwtHelper = require("../utilities/jwt");

class Users {
  // custom singup function
  UserSignUp = async (req, res) => {
    let errors = [];

    const {
      email,
      password,
      first_name,
      last_name,
      phonenumber,
      // Identity_card_no,
      license,
      vehicle_registration_no,
    } = req.body;

    if (!email) {
      errors.push("Email");
    }

    if (!password) {
      errors.push("Password");
    }

    if (!first_name) {
      errors.push("First Name");
    }

    if (!last_name) {
      errors.push("Last Name");
    }

    if (!phonenumber) {
      errors.push("PhoneNO");
    }
    // if (!Identity_card_no) {
    //   errors.push("Identity_card_number");
    // }
    if (!license) {
      errors.push("License");
    }
    if (!vehicle_registration_no) {
      errors.push("Vehicle_registration_number");
    }

    if (errors.length > 0) {
      errors = errors.join(", ");
      return res.send({
        message: `Please insert: ${errors}`,
        status: "400",
        success: false,
      });
    }
    try {
      let user = await UserServices.getUser({ email });
      if (user) {
        existAlreadyResponse(res, messageUtil.emailAlreadyExist);
      } else {
        user = await UserServices.createUser({
          ...req.body,
        });
        user.password = await bcryptHash(password);
        await user.save();

        successResponse(res, messageUtil.userRegister, user);
      }
    } catch (err) {
      serverErrorResponse(res, err);
    }
  };

  UserLogin = async (req, res) => {
    const { email, password } = req.body;
    let errors = [];
    if (!email) {
      errors.push("Email");
    }

    if (!password) {
      errors.push("Password");
    }

    if (errors.length > 0) {
      errors = errors.join(", ");
      return res.send({
        message: `Please insert: ${errors}`,
        status: "400",
      });
    }
    let user;
    try {
      user = await UserServices.getUser({ email });
      if (!user) {
        notFoundResponse(res, messageUtil.NotFound);
      } else {
        const isMatch = await comparePassword(password, user.password);
        if (!isMatch) {
          authorizationErrorResponse(res, messageUtil.incorrectPassword);
        }
        const token = jwtHelper.issue({ id: user._id });
        successResponse(res, messageUtil.ok, user, token);
      }
    } catch (err) {
      serverErrorResponse(res, err);
    }
  };

  UserAuth = async (req, res) => {
    const { email, password } = req.body;
    let user;
    try {
      user = await UserServices.getUser({ _id: req.userId });
      if (!user) {
        notFoundResponse(res, messageUtil.NotFound);
      } else {
        // const token = jwtHelper.issue({ id: user._id });
        successResponse(res, messageUtil.ok, user);
      }
    } catch (err) {
      serverErrorResponse(res, err);
    }
  };

  GetAllUsers = async (req, res) => {
    let user;
    try {
      user = await UserServices.getAllUsers({ _id: req.userId });
      if (user.length === 0) {
        notFoundResponse(res, messageUtil.NotFound);
      } else {
        successResponse(res, messageUtil.ok, user);
      }
    } catch (err) {
      serverErrorResponse(res, err);
    }
  };

  GetUserById = async (req, res) => {
    const { customerId } = req.params;
    console.log("customerId", customerId);
    let user;
    try {
      user = await UserServices.getUserDetails({ _id: customerId });
      if (!user) {
        notFoundResponse(res, messageUtil.NotFound);
      } else {
        // const token = jwtHelper.issue({ id: user._id });
        successResponse(res, messageUtil.ok, user);
      }
    } catch (err) {
      serverErrorResponse(res, err);
    }
  };

  UpdateUser = async (req, res) => {
    const { customerId } = req.params;
    console.log("customerId", customerId);
    let user;
    try {
      user = await UserServices.updateUserById(
        { _id: customerId },
        { ...req.body }
      );
      if (!user) {
        notFoundResponse(res, messageUtil.NotFound);
      } else {
        // const token = jwtHelper.issue({ id: user._id });
        successResponse(res, messageUtil.updateSuccess, user);
      }
    } catch (err) {
      serverErrorResponse(res, err);
    }
  };
  UpdateUserPassword = async (req, res) => {
    const { newPassword, password } = req.body;
    let errors = [];

    if (!newPassword) {
      errors.push("New password");
    }

    if (!password) {
      errors.push("Password");
    }

    if (errors.length > 0) {
      // errors = errors.join(" ,");
      return res.send({
        message: `Please insert: ${errors}`,
        status: "400",
      });
    }

    try {
      let user = await UserServices.getUser({
        _id: req.userId,
      });

      if (user) {
        const isMatch = await comparePassword(password, user.password);

        if (!isMatch) {
          return authorizationErrorResponse(
            res,
            messageUtil.incorrectOldPassword
          );
        }

        user.password = await bcryptHash(newPassword);

        let updatedUser = await UserServices.updateUserById(
          { _id: req.userId },
          { ...user }
        );

        return successResponse(res, messageUtil.updateSuccess, updatedUser);
      } else {
        return notFoundResponse(res, messageUtil.NotFound);
      }
    } catch (err) {
      return serverErrorResponse(res, err);
    }
  };

  GetAllDrivers = async (req, res) => {
    let user;
    try {
      user = await UserServices.getAllDrivers({ role: "driver" });
      if (user.length === 0) {
        notFoundResponse(res, messageUtil.NotFound);
      } else {
        successResponse(res, messageUtil.ok, user);
      }
    } catch (err) {
      serverErrorResponse(res, err);
    }
  };
}
module.exports = new Users();

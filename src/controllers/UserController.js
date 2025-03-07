import { StatusCodes } from "http-status-codes";
import register from "../services/users/register.js";
import BaseError from "../exception/BaseError.js";
import login from "../services/users/login.js";

export const registerController = async (req, res) => {
  try {
    const { username, password, phone_number, email } = req.body;

    const response = await register({
      username,
      password,
      phone_number,
      email,
    });

    if (response) {
      return res.status(StatusCodes.CREATED).json({
        status: StatusCodes.CREATED,
        message: "user succesfully registered",
        content: { data: response.data, token: response.token },
      });
    }
    throw new BaseError({
      status: StatusCodes.INTERNAL_SERVER_ERROR,
      message: `an internal server error`,
    });
  } catch (err) {
    return res.status(err.status).json({
      status: err.status,
      message: err.message,
    });
  }
};

export const loginController = async (req, res) => {
  try {
    const { username_or_phone_number, password } = req.body;
    
    const response = await login({
      username_or_phone_number,
      password,
    });

    return res.status(StatusCodes.OK).json({
      status: StatusCodes.OK,
      message: "login success",
      content: response,
    });
  } catch (error) {
    return res.status(error.status).json({
      status: error.status,
      message: error.message,
    });
  }
};

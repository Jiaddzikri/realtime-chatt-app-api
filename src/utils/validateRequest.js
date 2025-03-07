import { StatusCodes } from "http-status-codes";
import BaseError from "../exception/BaseError.js";

export default function validateRequest(schema, options) {
  return async (req, res, next) => {
    try {
      await schema.validate(req, {
        abortEarly: false,
        strict: false,
      });
      next();
    } catch (error) {
      const errors = {};
      error.inner.forEach((err) => {
        const field = err.path.split(".");
        errors[field[1]] = err.message;
      });
      return res.status(StatusCodes.BAD_REQUEST).json({
        status: StatusCodes.BAD_REQUEST,
        message: errors,
      });
    }
  };
}

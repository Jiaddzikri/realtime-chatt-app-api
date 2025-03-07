import BaseError from "../exception/BaseError.js";
import { StatusCodes } from "http-status-codes";

const errThrower = (err) => {
  if (err instanceof BaseError) {
    throw err;
  }
  throw new BaseError({
    status: err.status || StatusCodes.INTERNAL_SERVER_ERROR,
    message: err.message,
  });
};
export default errThrower;

import { StatusCodes } from "http-status-codes";
import BaseError from "../../exception/BaseError.js";
import findByUsername from "../../repositories/users/findByUsername.js";
import errThrower from "../../utils/errThrower.js";
import bcrypt from "bcrypt";
import { createJwt } from "../../utils/jwt.js";
import findByPhoneNumber from "../../repositories/users/findByPhoneNumber.js";

const login = async (params) => {
  try {
    const { username_or_phone_number, password } = params; 
    
    const usernameRegex = /^[a-zA-Z0-9]{3,}$/;
    const phoneNumberRegex = /^(?:\+62|0)8[1-9][0-9]{6,13}$/;
    let user = null;

    if (usernameRegex.test(username_or_phone_number)) {
      user = await findByUsername(username_or_phone_number);
    }

    if (phoneNumberRegex.test(username_or_phone_number)) {
      user = await findByPhoneNumber(username_or_phone_number);
    }

    if (!user) {
      throw new BaseError({
        status: StatusCodes.BAD_REQUEST,
        message: "username or phone number field or password field is wrong",
      });
    }

    const comparePassword = bcrypt.compareSync(password, user.password);

    if (!comparePassword) {
      throw new BaseError({
        status: StatusCodes.BAD_REQUEST,
        message: "username or phone number field or password field is wrong",
      });
    }

    const now = Date.now();
    const payload = {
      iat: now,
      exp: now / 1000 + 60 * 60 * 8,
      sub: {
        id: user.id,
        username: user.username,
      },
    };

    const token = await createJwt(payload);

    return {
      data: {
        id: user.id,
        username: user.username,
        email: user.email,
        phone_number: user.phone_number,
      },
      token,
    };
  } catch (err) {
    errThrower(err);
  }
};
export default login;

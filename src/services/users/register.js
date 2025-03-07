import BaseError from "../../exception/BaseError.js";
import create from "../../repositories/users/create.js";
import findByEmail from "../../repositories/users/findByEmail.js";
import findByPhoneNumber from "../../repositories/users/findByPhoneNumber.js";
import findByUsername from "../../repositories/users/findByUsername.js";
import errThrower from "../../utils/errThrower.js";
import { createJwt } from "../../utils/jwt.js";

const register = async (params) => {
  try {
    const { username, password, email, phone_number } = params;

    if (await findByUsername(username)) {
      throw new BaseError({
        status: 400,
        message: `username already exist`,
      });
    }

    if (await findByEmail(email)) {
      throw new BaseError({
        status: 400,
        message: `email already exist`,
      });
    }

    if (await findByPhoneNumber(phone_number)) {
      throw new BaseError({
        status: 400,
        message: `phone number already exist`,
      });
    }

    const created = await create({
      username: username,
      email: email,
      phone_number: phone_number,
      password: password,
      status: "offline",
    });

    const now = Date.now();

    const payload = {
      iat: now,
      exp: now / 1000 + 60 * 60 * 8,
      sub: {
        id: created.id,
        username: created.username,
      },
    };

    const token = await createJwt(payload);

    return {
      data: created,
      token,
    };
  } catch (err) {
    errThrower(err);
  }
};
export default register;

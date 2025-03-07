import * as fs from "fs";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import errThrower from "./errThrower.js";

dotenv.config();

export const createJwt = (payload) => {
  try {
    const privateKey = fs.readFileSync("./" + process.env.JWT_PRIVATE_TOKEN);
    const token = jwt.sign(payload, privateKey, { algorithm: "RS256" });

    return token;
  } catch (err) {
    errThrower(err);
  }
};

export const verifyJwt = (token) => {
  try {
    const publicKey = fs.readFileSync("./" + process.env.JWT_PUBLIC_TOKEN);
    const decoded = jwt.verify(token, publicKey);

    return decoded;
  } catch (err) {
    errThrower(err);
  }
};

import User from "../../schemas/models/users.js";
import errThrower from "../../utils/errThrower.js";

const findByEmail = async (param) => {
  try {
    return await User.findOne({
      where: { email: param },
      attributes: ["id", "username", "email", "phone_number", "password"],
    });
  } catch (err) {
    errThrower(err);
  }
};
export default findByEmail;

import User from "../../schemas/models/users.js";
import errThrower from "../../utils/errThrower.js";

const create = async (request) => {
  try {
    return User.create(request);
  } catch (err) {
    errThrower(err);
  }
};
export default create;

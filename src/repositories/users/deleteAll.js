import User from "../../schemas/models/users.js";
import errThrower from "../../utils/errThrower.js";

const deleteAll = async () => {
  try {
    return await User.sequelize.query("DELETE FROM users");
  } catch (err) {
    errThrower(err);
  }
};
export default deleteAll;

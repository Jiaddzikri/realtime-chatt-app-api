import { Router } from "express";
import validateRequest from "../../utils/validateRequest.js";
import registerValidationsSchema from "../../schemas/validations/users/register.js";
import {
  loginController,
  registerController,
} from "../../controllers/UserController.js";
import loginValidationSchema from "../../schemas/validations/users/login.js";

const userRouter = Router();

userRouter.post(
  "/register",
  validateRequest(registerValidationsSchema),
  registerController
);

userRouter.post(
  "/login",
  validateRequest(loginValidationSchema),
  loginController
);

export default userRouter;

import { object, string } from "yup";

const loginValidationSchema = object({
  body: object({
    username_or_phone_number: string(
      "username or phone number must be a string"
    ).required("username or phone number is required"),
    password: string("password must be a string").required(
      "password is required"
    ),
  }),
});
export default loginValidationSchema;

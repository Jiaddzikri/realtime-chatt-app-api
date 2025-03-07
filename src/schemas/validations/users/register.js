import { object, ref, string } from "yup";

const registerValidationsSchema = object({
  body: object({
    username: string("username must be a string")
      .required("username is required")
      .min(3, "username must be at least 3 characters long"),
    email: string("email must be a string")
      .required("email is required")
      .email("must be a valid email"),
    phone_number: string("phone number must be a string")
      .required("phone number is required")
      .matches(/^(?:\+62|0)8[1-9][0-9]{6,13}$/, {
        message:
          "must be a valid phone number! example(+62 or 08 with minimum 6 digit and max 15 digit)",
      }),
    password: string("phone password must be a string")
      .required("password is required")
      .min(8, "password at least 8 characters"),
    confirm_password: string("confirm password must be a string")
      .required(`confirm password is required`)
      .oneOf([ref("password"), null], `password doesnt match`),
  }),
});
export default registerValidationsSchema;

import * as yup from "yup";

export const loginValidationSchema = yup.object().shape({
  username: yup.string().required("Username is required"),
});

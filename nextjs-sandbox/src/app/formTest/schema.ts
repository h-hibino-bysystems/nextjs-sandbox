import { z } from "zod";

export const schema = z.object({
  email: z.preprocess(
    (value) => (value === "" ? undefined : value),
    z.string({ required_error: "Email is required" }).email("Email is invalid")
  ),
  password: z.preprocess(
    (value) => (value === "" ? undefined : value),
    z
      .string({ required_error: "password is required" })
      .min(10, "password is too short")
      .max(100, "password is too long")
  ),
});

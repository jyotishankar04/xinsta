import z from "zod";

const registerSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Name must be at least 3 characters long" }),
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" }),
});

const otpVerificationSchema = z.object({
  otp: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" }),
});

const updateUserSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Name must be at least 3 characters long" })
    .optional(),
  username: z
    .string()
    .min(3, { message: "Username must be at least 6 characters long" })
    .optional(),
  bio: z.string().optional(),
  dob: z.date().optional(),
});

export { registerSchema, otpVerificationSchema, updateUserSchema };

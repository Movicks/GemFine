import * as z from 'zod';

const usernameRegex = /^[a-zA-Z0-9_]{3,15}$/;
const phoneSchema = z
  .string()
  .regex(
    /(^\+234[0-9]{10}$)|(^234[0-9]{10}$)|(^0[7-9][0-1][0-9]{8}$)/,
    "Phone Number must be between 10 to 15 digits long",
  );
const uppercaseRegex = /(?=.*[A-Z])/;
const lowercaseRegex = /(?=.*[a-z])/;
const digitRegex = /(?=.*\d)/;
const specialCharRegex = /(?=.*[@$!%*?&])/;
const emailSchema = z
  .string()
  .email({ message: "Invalid Email Address" })
  .transform((email) => email.toLowerCase())
  .refine(
    (email) => {
      const [localPart] = email.split("@");
      return localPart && localPart.length >= 2;
    },
    {
      message:
        "Your Email must have at least 2 characters before the '@' symbol",
    },
  );

export const registerSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  username: z.string()
    .min(3, "Username must be at least 3 characters")
    .max(15, "Username must be at most 20 characters")
    .regex(usernameRegex, "Username can only contain letters, numbers, and underscores"),
  email: emailSchema,
  country: z.string(),
  phone: phoneSchema,
  password: z.string()
    .min(8, "Password must be at least 8 characters long")
    .regex(uppercaseRegex, "Password must include at least one uppercase letter")
    .regex(lowercaseRegex, "Password must include at least one lowercase letter")
    .regex(digitRegex, "Password must include at least one digit")
    .regex(specialCharRegex, "Password must include at least one special character (@$!%*?&)"),
});

export const loginSchema = z.object({
  username: z.string()
    .min(3, "Username must be at least 3 characters")
    .max(20, "Username must be at most 20 characters")
    .regex(usernameRegex, "Username can only contain letters, numbers, and underscores"),
  password: z.string()
    .min(8, "Password must be at least 8 characters long")
    .regex(uppercaseRegex, "Password must include at least one uppercase letter")
    .regex(lowercaseRegex, "Password must include at least one lowercase letter")
    .regex(digitRegex, "Password must include at least one digit")
    .regex(specialCharRegex, "Password must include at least one special character (@$!%*?&)"),
  fingerprintLogin: z.boolean().optional(),
});

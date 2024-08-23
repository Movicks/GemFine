import * as z from 'zod';

const usernameRegex = /^[a-zA-Z0-9_]{3,15}$/;
const phoneRegex = /^[0-9]{10,15}$/;
const uppercaseRegex = /(?=.*[A-Z])/;
const lowercaseRegex = /(?=.*[a-z])/;
const digitRegex = /(?=.*\d)/;
const specialCharRegex = /(?=.*[@$!%*?&])/;

export const registerSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  username: z.string()
    .min(3, "Username must be at least 3 characters")
    .max(15, "Username must be at most 20 characters")
    .regex(usernameRegex, "Username can only contain letters, numbers, and underscores"),
  email: z.string().email("Invalid email address"),
  country: z.string(),
  phone: z.string()
    .regex(phoneRegex, "Phone number must be between 10 and 15 digits"),
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

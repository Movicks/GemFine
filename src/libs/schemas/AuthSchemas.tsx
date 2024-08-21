// src/schemas/authSchemas.ts
import * as z from 'zod';

const usernameRegex = /^[a-zA-Z0-9_]{3,20}$/;
const phoneRegex = /^[0-9]{10,15}$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

export const registerSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  username: z.string()
    .min(3, "Username must be at least 3 characters")
    .max(20, "Username must be at most 20 characters")
    .regex(usernameRegex, "Username can only contain letters, numbers, and underscores"),
  email: z.string().email("Invalid email address"),
  country: z.string(),
  phone: z.string()
    .regex(phoneRegex, "Phone number must be between 10 and 15 digits"),
  password: z.string()
    .regex(passwordRegex, "Password must be at least 8 characters, include one uppercase letter, one lowercase letter, one digit, and one special character"),
});

export const loginSchema = z.object({
  username: z.string()
    .min(3, "Username must be at least 3 characters")
    .max(20, "Username must be at most 20 characters")
    .regex(usernameRegex, "Username can only contain letters, numbers, and underscores"),
  password: z.string()
    .regex(passwordRegex, "Password must be at least 8 characters, include one uppercase letter, one lowercase letter, one digit, and one special character"),
  fingerprintLogin: z.boolean().optional(),
});
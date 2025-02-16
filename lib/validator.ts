import { z } from "zod";
import { formatNumberWithDecimal } from "./utils";

const currency = z
  .string()
  .refine(
    (value) => /^\d+(\.\d{2})?/.test(formatNumberWithDecimal(Number(value))),
    "price must have exactly two decimal places"
  );

export const insertProductSchema = z.object({
  name: z.string().min(3, "name must be 3 character"),
  slug: z.string().min(3, "slug must be 3 character"),
  category: z.string().min(3, "category must be 3 character"),
  brand: z.string().min(3, "brand must be 3 character"),
  description: z.string().min(3, "Description must be 3 character"),
  stock: z.coerce.number(),
  images: z.array(z.string()).min(1, "Product must have least one image "),
  isFeatured: z.boolean(),
  banner: z.string().nullable(),
  price: currency,
});

// Schema for sign users in 
export const signInFormSchema = z.object({
  email:z.string().email("Invalid email address"),
  password:z.string().min(6,"Password must be least 6 characters")
})